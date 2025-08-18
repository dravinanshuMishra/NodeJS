const buffer = new ArrayBuffer(16);

// signed
const int8View = new Int8Array(buffer);
const int16View = new Int16Array(buffer);
const int32View = new Int32Array(buffer);
const bigInt64View = new BigInt64Array(buffer);

int8View[0] = -128;
int8View[1] = 127;
int16View[1] = -32768;
int32View[1] = 2147483647;
bigInt64View[0] = 1234567890123456789n;

console.log("Int8:", int8View);
console.log("Int16:", int16View);
console.log("Int32:", int32View);
console.log("BigInt64:", bigInt64View);

// unsigned
const uint8View = new Uint8Array(buffer);
const uint16View = new Uint16Array(buffer);
const uint32View = new Uint32Array(buffer);
const bigUint64View = new BigUint64Array(buffer);

uint8View[0] = 255;
uint16View[1] = 65535;
uint32View[1] = 4294967295;
bigUint64View[0] = 987654321987654321n;

console.log("Uint8:", uint8View);
console.log("Uint16:", uint16View);
console.log("Uint32:", uint32View);
console.log("BigUint64:", bigUint64View);

// floating
const float32View = new Float32Array(buffer);
const float64View = new Float64Array(buffer);

float32View[0] = 3.14;
float32View[1] = -2.71;
float64View[0] = 1.6180339887;
float64View[1] = -0.57721;

console.log("Float32:", float32View);
console.log("Float64:", float64View);
