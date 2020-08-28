package main

import (
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
)

func Log(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if !strings.HasPrefix(r.URL.Path, "/static/") {
			log.Printf("%s %s %s", r.RemoteAddr, r.Method, r.URL)
		}
		handler.ServeHTTP(w, r)
	})
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	if _, err := os.Stat("dist/portal/" + r.URL.Path); os.IsNotExist(err) {
		http.ServeFile(w, r, "dist/portal/index.html")
	} else {
		http.ServeFile(w, r, "dist/portal/"+r.URL.Path)
	}
}

func main() {
	file_url := "/usr/src/app/dist/portal/"

	// open and recreate file with env variables
	data, err := ioutil.ReadFile(file_url + "env.txt")
	if err != nil {
		log.Fatal(err)
	}

	new_content := strings.ReplaceAll(string(data), "URL_GEOSERVER", "'"+os.Getenv("URL_GEOSERVER")+"'")
	new_content = strings.ReplaceAll(new_content, "URL_STAC_COMPOSE", "'"+os.Getenv("URL_STAC_COMPOSE")+"'")
	new_content = strings.ReplaceAll(new_content, "URL_VIA_CEP", "'"+os.Getenv("URL_VIA_CEP")+"'")
	new_content = strings.ReplaceAll(new_content, "URL_API", "'"+os.Getenv("URL_API")+"'")
	new_content = strings.ReplaceAll(new_content, "PROVIDERS_TOKEN", "'"+os.Getenv("PROVIDERS_TOKEN")+"'")
	new_content = strings.ReplaceAll(new_content, "GRIDS", "'"+os.Getenv("GRIDS")+"'")
	new_content = strings.ReplaceAll(new_content, "SEARCH_FORM_MAX_LIMIT", "'"+os.Getenv("SEARCH_FORM_MAX_LIMIT")+"'")

	err = ioutil.WriteFile(file_url+"assets/env.js", []byte(new_content), 0644)

	if err != nil {
		log.Fatalln(err)
	}

	http.HandleFunc("/", rootHandler)

	log.Println("Aplicação iniciada com sucesso")
	http.ListenAndServe(":8000", Log(http.DefaultServeMux))
}
