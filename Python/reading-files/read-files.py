import time # Permite manipular fechas y horas
import os # Permite manipular ciertos sectores del sistema operativo
import sys # Permite manipular ciertos aspectos del sistema y la ejecución de scripts

# Crear un script que lea un archivo de texto, maneje los errores del mismo y muestre el tiempo de ejecución de la lectura

# Algunos modos de apertura de archivos:
# - r --> Lectura
# - w --> Escritura
# - a --> Adición

# Módulo time
# Permite manipular fechas y horas
# - time() --> Retorna el tiempo actual en segundos desde la época (1 de enero de 1970)

def read_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            start_time = time.time() # Permite capturar el tiempo de inicio de la lectura
            for i, line in enumerate(file):
                time.sleep(0.01)  # Simula una demora en la lectura
                enlapsed = time.time() - start_time

                print(f"Línea {i + 1} (leída en {enlapsed:.2f} segundos): {line.strip()}")
    except FileNotFoundError:
        print(f"Error: El archivo '{file_path}' no se encontró.")
        return

path = "sample.txt"
read_file(path)
