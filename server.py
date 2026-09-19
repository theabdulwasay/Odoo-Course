import http.server
import socketserver
import webbrowser
import os

DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

class ReuseTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

def start_server():
    ports = [8000, 8001, 8080, 8888]
    for port in ports:
        try:
            with ReuseTCPServer(("", port), Handler) as httpd:
                url = f"http://localhost:{port}"
                print(f"==================================================")
                print(f"  Odoo for Business Course Platform is Running!  ")
                print(f"  Access URL: {url}")
                print(f"==================================================")
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                httpd.serve_forever()
                break
        except OSError:
            print(f"Port {port} in use, trying next port...")

if __name__ == "__main__":
    start_server()
