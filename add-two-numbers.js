/*global ListNode */

/* This was frustrating — the example for ListNode was ill-defined, and I'd
   be very surprised to be working with an interface that should iterate but
   wasn't an iterator in JavaScript! */

const addTwoNumbers = (l1, l2) => {
    const a1 = [];
    const a2 = [];

    let working = l1;
    a1.push(working.val);
    while (working.next) {
        working = working.next;
        a1.push(working.val);
    }

    working = l2;
    a2.push(working.val);
    while (working.next) {
        working = working.next;
        a2.push(working.val);
    }

    const newArray = String((BigInt(a1.reverse().join('')) + BigInt(a2.reverse().join(''))))
        .split('');

    let next = null;
    newArray.forEach(el => {
        next = new ListNode(el, next);
    })

    return next;
}

console.log(addTwoNumbers([2,4,3], [5,6,4]))
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))
console.log(addTwoNumbers([0], [0]))
