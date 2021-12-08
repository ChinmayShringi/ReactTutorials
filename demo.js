let ar = [1, 2, 3, 4, 5];
for (var i = 0; i < ar.length(); i++) {
  console.log(ar[i]);
}

ar.forEach((element, index) => {
  console.log(element);
  element = element + 10;
});

ar.map((element) => {
  element = element + 10;
});

inbox = [{
    subject:"asdf1"
},{
    subject:"asdf2"
},{
    subject:"Mockingbird",
    author:"asdasd"
},{
    subject:"asd4"
}
]

inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    }
    return false;
  });