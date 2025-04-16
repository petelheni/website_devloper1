
//Q.33 Write a JavaScript program to compare two objects?

< !DOCTYPE html >
    <html>
        <title>Comparing two objects</title>
        <head>
            <script>
                const Fruit1 = {fruit: 'kiwi' }; // Creating Fruit1 object
                const Fruit2 = {fruit: 'Mango' }; // Creating Fruit2 object

                // Performing JSON.Stringify and === operator
                document.write(JSON.stringify(Fruit1) === JSON.stringify(Fruit2));
            </script>
        </head>
        <body>
        </body>
    </html>