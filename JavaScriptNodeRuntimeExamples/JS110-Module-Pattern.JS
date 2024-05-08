const CarModule = (function() {
    let make;
    let model;

    function startEngine() {
        console.log('Engine started');
    }

    return {
        setMake: function(m) {
            make = m;
        },
        setModel: function(m) {
            model = m;
        },
        start: startEngine
    };
})();

CarModule.setMake('Toyota');
CarModule.setModel('Camry');
CarModule.start(); // Output: Engine started