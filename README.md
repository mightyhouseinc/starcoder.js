# 💫StarCoder.js *\*Experimental*\*

Web browser version of [StarCoder.cpp](https://github.com/bigcode-project/starcoder.cpp).

`THIS IS UNDER DEVELOPMENT AND IS NOT PRODUCTION READY. BROWSER REQUIRED MEM64 SUPPORT TO RUN THIS PROJECT`

* Project tested on Firefox Nightly Version: 117.0a1 (2023-07-18) (64-bit)

```
git clone https://github.com/bigcode-project/starcoder.cpp
cd starcoder.cpp

Model Quantization

# make sure to have torch, transformer library
python convert-hf-to-ggml.py bigcode/tiny_starcoder_py 

# Build for local
make clean
make 

# Taken from here https://huggingface.co/mike-ravkine/tiny_starcoder_py-GGML/blob/main/tiny_starcoder_py-fp16.bin
./quantize models/tiny_starcoder_py-fp16.bin models/tiny_starcoder_py-q4_1.bin 3


# Build for WASM
make clean
make CC=emcc CXX=em++ LLAMA_NO_ACCELERATE=1 CFLAGS=" -DNDEBUG -s MEMORY64" CXXFLAGS=" -DNDEBUG -s MEMORY64" LDFLAGS="-s MEMORY64 -s TOTAL_MEMORY=2147483648 -s STACK_SIZE=524288  --preload-file models" main.html

or

./build-wasm.sh

```