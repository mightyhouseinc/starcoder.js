set -e

cd starcoder.cpp/

make clean

# make CC=emcc CXX=em++ LLAMA_NO_ACCELERATE=1 CFLAGS=" -DNDEBUG -s MEMORY64" CXXFLAGS=" -DNDEBUG -s MEMORY64" LDFLAGS="-s MEMORY64 -s TOTAL_MEMORY=2147483648 -s STACK_SIZE=524288  --preload-file models" main.html

make CC=emcc CXX=em++ LLAMA_NO_ACCELERATE=1 CFLAGS=" -DNDEBUG -s MEMORY64" CXXFLAGS=" -DNDEBUG -s MEMORY64" LDFLAGS="-s MEMORY64 -s FORCE_FILESYSTEM=1 -s EXPORT_ES6=1 -s MODULARIZE=1 -s TOTAL_MEMORY=1GB -s STACK_SIZE=524288 -s ALLOW_MEMORY_GROWTH -s EXPORTED_FUNCTIONS=_main -s EXPORTED_RUNTIME_METHODS=callMain " main.js

