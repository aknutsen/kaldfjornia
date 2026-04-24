package main

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

type Product struct {
	ID              string   `json:"id"`
	Name            string   `json:"name"`
	Description     string   `json:"description"`
	LongDescription string   `json:"long_description"`
	Price           string   `json:"price"`
	Images          []string `json:"images"`
	Specs           []string `json:"specs"`
}

var products []Product

func loadProducts() {
	file, err := os.ReadFile("products.json")
	if err != nil {
		log.Fatal(err)
	}
	err = json.Unmarshal(file, &products)
	if err != nil {
		log.Fatal(err)
	}
}

func renderTemplate(w http.ResponseWriter, r *http.Request, name string, data interface{}) {
	tmpl, err := template.ParseFiles("templates/layout.html", "templates/"+name)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	tmpl.Funcs(template.FuncMap{
		"add": func(a, b int) int { return a + b },
	})
	err = tmpl.ExecuteTemplate(w, "layout", data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func main() {
	loadProducts()

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	// Main routes
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		renderTemplate(w, r, "index.html", map[string]any{
			"Products": products,
		})
	})

	r.Get("/p/{id}", func(w http.ResponseWriter, r *http.Request) {
		id := chi.URLParam(r, "id")
		var foundProduct *Product
		for _, p := range products {
			if p.ID == id {
				foundProduct = &p
				break
			}
		}

		if foundProduct == nil {
			http.NotFound(w, r)
			return
		}

		renderTemplate(w, r, "product.html", map[string]interface{}{
			"Product": foundProduct,
		})
	})

	// Serve static files (specific files and assets directory)
	r.Get("/style.css", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "style.css")
	})
	r.Get("/app.js", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "app.js")
	})

	workDir, _ := os.Getwd()
	filesDir := http.Dir(filepath.Join(workDir, "assets"))
	FileServer(r, "/assets", filesDir)

	log.Println("Listening on :8080...")
	http.ListenAndServe(":8080", r)
}

// FileServer conveniently sets up a http.FileServer handler to serve
// static files from a http.FileSystem.
func FileServer(r chi.Router, path string, root http.FileSystem) {
	if path != "/" && path[len(path)-1] != '/' {
		r.Get(path, http.RedirectHandler(path+"/", 301).ServeHTTP)
		path += "/"
	}
	path += "*"

	r.Get(path, func(w http.ResponseWriter, r *http.Request) {
		rctx := chi.RouteContext(r.Context())
		pathPrefix := strings.TrimSuffix(rctx.RoutePattern(), "/*")
		fs := http.StripPrefix(pathPrefix, http.FileServer(root))
		fs.ServeHTTP(w, r)
	})
}
