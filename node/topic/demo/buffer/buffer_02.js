/**
 * Created by cyk on 15-6-17.
 */

var buf1 = new Buffer(26),
    buf2,
    i;

for(var i = 0; i < 26; i +=1) {
    buf1[i] = i + 97; // 97 is ASCII a
}

buf2 = buf1.slice(0, 3);

console.log(
    buf1,
    buf2.toString('ascii', 0, buf2.length)
);

buf2[0] = 16;

console.log(
    buf1,buf2
);

