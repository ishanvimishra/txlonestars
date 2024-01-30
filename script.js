// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Select all the .border-item elements
    var borderItems = document.querySelectorAll('.border-item');

    // Define an array of image URLs and their corresponding text
    var imageTextPairs = [
        { imageUrl: 'keychains.jpeg', text: ' every time i travel, i have a tradition of picking a unique keychain as a way of keeping a piece of each adventure with me. i guess you could say i really "cherry-sh" these keychains! :))' },
        { imageUrl: 'cake.jpeg', text: 'baking is the cherry on top of my sweet days. <3' },
        { imageUrl: 'reading.jpeg', text: 'i absolutely love reading!!!! (i have read all of booktok pls send help and more recs)' },
        { imageUrl: 'roblox.jpeg', text: "ROBLOX!! i love playing with all my friends i can literally play for hours with them. i'm still trying to find the perfect cherry outfit - add me on @glowyteens!" },
        { imageUrl: 'digi.jpeg', text: 'my digi cam has my heart. it captures all of my cherry sweet memories' },
        { imageUrl: 'keychains.jpeg', text: 'MAXXX <3 hes the fluffiest and always has a "cherry" big smile on his face!!' },
        { imageUrl: 'jhumka.jpeg', text: 'connecting to my culture by learning how to make traditional earrings! my favorite gems to use are cherry red 😋' },
        { imageUrl: 'music.jpeg', text: 'you will always see me listening to music i swear. i love curating playlists for different moods and situations!!' },
        { imageUrl: 'astrology.jpeg', text: "recently i've been into astrology and watching tarot card videos. i'm a double cancer! (i cry when i see cute tiktoks)" },
        { imageUrl: 'crochet.jpeg', text: "I WANNA LEARN HOW TO CROCHET SO BAD have you ever seen the coach cherry charm?  it's so cute and i want to crochet a cherry keychain just like it for my shoulder bag 🍒✨" },
        { imageUrl: 'concert.jpeg', text: 'my concert lineup always slays so hard (taylor swift, the weeknd, harry styles, olivia rodrigo, gracie abrams, etc!) i am always down to be your concert buddie even if i barely know the artist!!!!!' },
        { imageUrl: 'painting.jpeg', text: "my form of therapy is art (specifically painting) i love it so much. while making this project, i found my new inspiration pic of water colored cherries and i can't wait to start 🍒" },
        { imageUrl: 'juice.jpeg', text: "one thing to know about me is i LOVE drinks (literally any sweet drink) i'm such a drink chugger, i can finish it in seconds" },
        { imageUrl: 'uno.jpeg', text: "i love uno. it's the best game to exist and i especially love playing with my family. warning though, i will never hesitate to plus 4 anyone teehee" },
    ];

    // Add a click event listener to each .border-item
    borderItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            // Get the image inside the clicked .border-item
            var img = item.querySelector('img');

            // Toggle the display style of both the image and text
            if (img.style.display === 'none' || img.style.display === '') {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }

            // Get the dynamic text element
            var dynamicText = document.getElementById('dynamic-text');

            // Update the text based on the clicked image
            dynamicText.textContent = imageTextPairs[index].text;
        });
    });
});
