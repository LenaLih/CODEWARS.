function dataReverse(data) {
   const byteSize = 8;
   const order = [];
   for (let i = 0; i < data.length; i += byteSize) {
      order.push(data.slice(i, i + byteSize));
   }
   return order.reverse().flat();
}

//  Получен поток данных, который необходимо реверсировать.

// Каждый сегмент имеет длину 8 бит, поэтому порядок этих сегментов необходимо поменять местами, например:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// должно стать:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// Общее количество бит всегда будет кратно 8.