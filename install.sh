#!/usr/bin/env bash
set -euo pipefail

# Despliegue de Kitty World en Ubuntu/Debian con Nginx.

echo "Actualizando codigo del repositorio..."
git pull origin main

echo "Actualizando paquetes del sistema..."
sudo apt update

echo "Instalando Nginx..."
sudo apt install -y nginx

echo "Publicando archivos en /var/www/html..."
sudo rm -rf /var/www/html/*
sudo cp -r index.html styles.css script.js pixelart /var/www/html/

echo "Verificando configuracion de Nginx..."
sudo nginx -t

echo "Reiniciando Nginx..."
sudo systemctl restart nginx

echo "Estado de Nginx:"
sudo systemctl status nginx --no-pager

echo "Despliegue completado. Accede en http://localhost o http://<IP-de-la-VM>"
