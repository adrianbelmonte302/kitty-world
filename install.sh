#!/bin/bash

# Script de instalación para desplegar Kitty World en una VM Linux (Ubuntu/Debian)
# Este script instala Nginx y configura el sitio web en el puerto 80

echo "Actualizando el sistema..."
sudo apt update

echo "Instalando Nginx..."
sudo apt install -y nginx

echo "Copiando archivos del juego a /var/www/html..."
sudo rm -rf /var/www/html/*
sudo cp -r * /var/www/html/

echo "Reiniciando Nginx..."
sudo systemctl restart nginx

echo "Verificando estado de Nginx..."
sudo systemctl status nginx --no-pager

echo "¡Despliegue completado! Accede al juego en http://localhost o http://<IP-de-la-VM>"