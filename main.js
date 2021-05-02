const dummyText = ['Jujubes cheesecake oat cake liquorice tiramisu. Oat cake brownie topping halvah jelly beans cheesecake dragée icing candy canes. Chupa chups gummies cupcake lollipop. Gummies pudding bonbon candy croissant sesame snaps tart gummies muffin.',
                    'Jelly-o cupcake bear claw jelly beans tiramisu. Dessert cookie liquorice liquorice. Dragée jujubes gummi bears cupcake jelly muffin icing tart cake. Soufflé tootsie roll marshmallow gingerbread bonbon pie liquorice wafer chocolate bar.',
                    'Halvah candy canes tiramisu cheesecake liquorice apple pie gingerbread. Gingerbread fruitcake ice cream biscuit cake. Cookie ice cream halvah tootsie roll toffee. Soufflé topping donut carrot cake.',
                    'Fruitcake lemon drops powder bear claw marshmallow jelly croissant biscuit. Sugar plum gummies danish lollipop jelly beans wafer dessert. Soufflé toffee topping jujubes donut muffin chocolate cake. Brownie dessert candy canes candy tootsie roll.',
                    'Cupcake cake candy sweet jelly beans brownie tiramisu. Sesame snaps tootsie roll pastry cake tiramisu sweet roll chocolate sweet cheesecake. Oat cake cheesecake tootsie roll.',
                    'Cotton candy sweet roll chocolate bar wafer. Chupa chups chupa chups jelly beans wafer cake gingerbread pastry pudding lollipop. Pudding carrot cake sesame snaps. Jelly topping cookie jelly-o.',
                    'Macaroon danish chocolate. Chupa chups topping powder. Sweet roll ice cream caramels fruitcake pastry fruitcake.',
                    'Apple pie halvah bonbon jujubes fruitcake oat cake. Candy liquorice chupa chups sweet roll. Oat cake marshmallow tiramisu candy canes candy canes bonbon jelly beans brownie candy canes.',
                    'Powder apple pie tootsie roll sesame snaps pastry toffee marshmallow pastry. Toffee ice cream gingerbread gummies pie. Danish jelly biscuit.',
                    'Tart oat cake fruitcake toffee brownie. Gummies ice cream marshmallow candy canes gummi bears fruitcake fruitcake dragée fruitcake. Wafer pie cupcake powder jujubes pudding apple pie apple pie.'

];

const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');


form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * dummyText.length);

    if(isNaN(value) || value<=0 || value>9){
        result.innerHTML = `<p> ${dummyText[random]} </p>`
    }else{
        const slicedArray = dummyText.slice(0,value);
        const finalArray = slicedArray
        .map (function (singleDummy){
            return `<p>${singleDummy}</p>`
        })
        .join('');
        result.innerHTML = finalArray
    }
})








































































