const even = require('events');

const emit= new even.EventEmitter();

//한번밖에 호출 안됨 (once)
// emit.once('evn1',function(e){
//     console.log('1이벤트');
// });
// emit.once('evn2',function(e){
//     console.log('2이벤트');
// });

//호출하는 만큼 호출 (on)
// emit.on('evn1',function(e){
//     console.log('1이벤트');
// });
// emit.on('evn2',function(e){
//     console.log('2이벤트');
// });

const cb1 = function(e) {
    console.log('1이벤트');
}
const cb2 = function(e) {
    console.log('2이벤트');
}

// emit.on('evn1',cb1);
// emit.on('evn2',cb2);
emit.addListener('evn1',cb1);
emit.addListener('evn2',cb2);
// console.log(emit);

emit.emit('evn1');
emit.emit('evn2');
console.log(emit.listenerCount('evn1'));

// emit.off('evn1',cb1); // 호출을 해도 더이상 호출되지 않음
emit.removeListener('evn1',cb1); // 위와 동일

emit.emit('evn1');
emit.emit('evn2');
console.log(emit.listenerCount('evn2'));

// emit.off('evn2',cb2); // 위와 동일
emit.removeListener('evn2',cb2); // 위와 동일

emit.emit('evn1');
emit.emit('evn2');
console.log(emit.listenerCount('evn2'));
