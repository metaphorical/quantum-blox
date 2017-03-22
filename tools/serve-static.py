import sys
import SimpleHTTPServer
import SocketServer
import os


# serve static content
Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
os.chdir(sys.argv[2])
httpd = SocketServer.TCPServer(("", int(sys.argv[1])), Handler)

print "serving {0} folder on localhost at port {1}".format(sys.argv[2],sys.argv[1])
httpd.serve_forever()