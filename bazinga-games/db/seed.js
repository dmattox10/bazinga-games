const {
    createProduct,
    getAllProducts,
    getProductById,
    getAllUsers,
    createUser,
    createCart,
    getAllCarts,
    getAllCartItems,
    addProductToCartItems,
    getCartByUser,
    getCartItemsByCart
  } = require("./index.js");
  const client = require("./client.js");
  
  async function createInitialUsers() {
    try {
      console.log("Starting to create users...");
  
      const Krystian = await createUser({
        username: "Krystian",
        password: "123", // Use ENV file for even this, if nothing else bots have scraped this file now for this username and password pair and will autoatically try it in the future.
        is_admin: true,
        email: "krystian1@gmail.com",
        address: "1 chestnutridgeway, orange park Fl 32065 USA"
      });
      
  
      console.log(Krystian);
      
      console.log("Finished creating users!");
    } catch (error) {
      console.error("Error creating users!");
      throw error;
    }
  }
  
  async function createInitialProducts() {
    try {
      console.log("Starting to create products...");
  
      const productsToCreate = [
        {
          name: "Sony Playstation 5",
          description: "video game console",
          detailed_description: "The latest Sony PlayStation introduced in November 2020. Powered by an eight-core AMD Zen 2 CPU and custom AMD Radeon GPU, the PS5 is offered in two models: with and without a 4K Blu-ray drive. Supporting a 120Hz video refresh, the PS5 is considerably more powerful than the PS4 and PS4 Pro.",
          stock: 4,
          image_url:
            "https://i.pcmag.com/imagery/encyclopedia-terms/ps5-ps5.fit_lim.size_1050x.jpg",
          price: 499,
          category: "console"
        },
       
        {
          name: "Microsoft Xbox series X",
          description: "Video Game Console",
          detailed_description: "Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles—all games look and play best on Xbox Series X. At the heart of Series X is the Xbox Velocity Architecture, which pairs a custom SSD with integrated software for faster, streamlined gameplay with significantly reduced load times. Seamlessly move between multiple games in a flash with Quick Resume. Explore rich new worlds and enjoy the action like never before with the unmatched 12 teraflops of raw graphic processing power. Enjoy 4K gaming at up to 120 frames per second, advanced 3D spatial sound, and more.",
          stock: 6,
          image_url:
            "https://media.gamestop.com/i/gamestop/11108371/Microsoft-Xbox-Series-X?$pdp2x$",
          price: 499,
          category: "console"
  
        },
        {
          name: "Microsoft Xbox series S",
          description: "Video Game Console",
          detailed_description: "Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price point. Get started with an instant library of 100+ high quality games, including all new Xbox Game Studios titles like Halo Infinite the day they release, when you add Xbox Game Pass Ultimate (membership sold separately). Seamlessly move between multiple games in a flash with Quick Resume. At the heart of Series S is the Xbox Velocity Architecture, which pairs a custom-SSD with integrated software for faster, streamlined gameplay with significantly reduced load times.",
          stock: 6,
          image_url:
            "https://media.gamestop.com/i/gamestop/11207109/Microsoft-Xbox-Series-S-Digital-Edition-Console?$pdp2x$",
          price: 249,
          category: "console"
  
        },
        {
          name: "Nintendo Switch",
          description: "Video Game Console",
          detailed_description: "Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home Nintendo Switch console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Nintendo Switch Joy-Con controllers.",
          stock: 6,
          image_url:
            "https://media.gamestop.com/i/gamestop/11095819/Nintendo-Switch-with-Joy-Con-Controller?$pdp2x$",
          price: 259,
          category: "console"
        },
        {
          name: "Pokemon Scarlet",
          description: "Nintendo Switch",
          detailed_description: "The newest chapters in the Pokémon™ series, the Pokémon Scarlet and Pokémon Violet games, are coming to the Nintendo Switch™ system later this year. As the main character, you can explore the wide-open world of Pokémon Scarlet at your own pace. In these games, you’ll be able to enjoy the iconic adventures of the Pokémon series, like battling against wild Pokémon and trying to catch them! Choose either Sprigatito, the Grass Cat Pokémon, Fuecoco, the Fire Croc Pokémon, or Quaxly, the Duckling Pokémon to be your first partner Pokémon before setting off on your journey through this new region.",
          stock: 20,
          image_url:
            "https://media.gamestop.com/i/gamestop/11202243?$pdp2x$",
          price: 54,
          category: "game"
  
        },
        {
          name: "Super Smash Bros. Ultimate",
          description: "Nintendo Switch",
          detailed_description: "Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more!",
          stock: 20,
          image_url:
            "https://media.gamestop.com/i/gamestop/10159620/Super-Smash-Bros.-Ultimate---Nintendo-Switch?$pdp2x$",
          price: 54,
          category: "game"
  
        },
        {
          name: "The Legend of Zelda: Tears of the Kingdom",
          description: "Nintendo Switch",
          detailed_description: "An epic adventure across the land and skies of Hyrule awaits in the Legend of Zelda: Tears of the Kingdom game for the Nintendo Switch system. The adventure is yours to create in a world fueled by your imagination. In this sequel to The Legend of Zelda: Breath of the Wild, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?",
          stock: 20,
          image_url:
            "https://media.gamestop.com/i/gamestop/20001188-83075a9c?$pdp2x$",
          price: 54,
          category: "game"
  
        },
        {
          name: "Metroid Prime Remastered",
          description: "Nintendo Switch",
          detailed_description: "Get behind the visor of intergalactic bounty hunter Samus Aran in her critically-acclaimed first-person adventure Step into the boots of Samus Aran as you navigate the winding paths and interconnected environments of an alluring-yet-dangerous alien planet. Use powers like the iconic Morph Ball and Grapple Beam to revisit hard-to-reach areas and find a path forward. With revamped graphics, sound, unlockable art, and updated control schemes, Samus’ 3D platforming debut has reached greater heights. Calm and capable, Samus takes on this solo mission…but she is far from alone.",
          stock: 20,
          image_url:
            "https://media.gamestop.com/i/gamestop/20003464/Metroid-Prime-Remastered---Nintendo-Switch?$pdp2x$",
          price: 37,
          category: "game"
  
        },
        {
          name: "Hogwarts Legacy",
          description: "PlayStation 5",
          detailed_description: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Now you can take control of the action and be at the center of your own adventure in the wizarding world. Your legacy is what you make of it. Live the unwritten.",
          stock: 20,
          image_url:
            "https://media.gamestop.com/i/gamestop/11203515?$pdp2x$",
          price: 64,
          category: "game"
  
        },
  
        {
          name: "Resident Evil 4",
          description: "PlayStation 5",
          detailed_description: "Resident Evil™ 4 joins Leon S. Kennedy six years after his hellish experiences in the biological disaster of Raccoon City. His unmatched resolve caused him to be recruited as an agent reporting directly to the president of the United States. With the experience of multiple missions on his back, Leon is dispatched to rescue the president’s recently kidnapped daughter. Leon tracks her to a secluded European village, however, after making first contact he discovers a fervor beyond reason grips the local populace. Now, this reimagined tale of survival in the face of overwhelming terror returns to deliver a visually stunning modern gaming experience that is true to the promise of the original release.",
          stock: 20,
          image_url:
            "https://media.gamestop.com/i/gamestop/10099653-2e0ec255?$pdp2x$",
          price: 54,
          category: "game"
  
        },
        {
          name: "Persona 5 Royal",
          description: "PlayStation 5",
          detailed_description: "Prepare for the award-winning RPG experience in this definitive edition of Persona 5 Royal, featuring a treasure trove of downloadable content included! Don the mask of Joker and join the Phantom Thieves of Hearts as they stage grand heists, infiltrate the minds of the corrupt, and make them change their ways!",
          stock: 20,
          image_url:
            "https://media.gamestop.com/i/gamestop/11098854-a50e2673?$pdp2x$",
          price: 39,
          category: "game"
  
        },
        {
          name: "God of War Ragnarok",
          description: "PlayStation 5",
          detailed_description: "Embark on a mythic journey for answers and allies before Ragnarök arrives in God of War Ragnarok on PS5. Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.",
          stock: 20,
          image_url:
            "https://media.gamestop.com/i/gamestop/11206962-11206961?$pdp2x$",
          price: 59,
          category: "game"
  
        },
        {
          name: "Call of Duty: Modern Warfare II",
          description: "Xbox Series X/S",
          detailed_description: "Call of Duty: Modern Warfare II drops players into an unprecedented global conflict that features the return of the iconic operators of Task Force 141. Modern Warfare® II will launch with a globe-trotting single-player campaign, immersive multiplayer combat, and an evolved special ops game mode featuring tactical co-op gameplay.",
          stock: 20,
          image_url:
            "https://media.gamestop.com/i/gamestop/11206901-11206902?$pdp2x$",
          price: 64,
          category: "game"
  
        },
        {
          name: "Star Wars Jedi: Survivor",
          description: "Xbox Series X",
          detailed_description: "The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third person galaxy-spanning action-adventure game from Respawn Entertainment, developed in collaboration with Lucasfilm Games. This narratively-driven, single player title picks up five years after the events of Star Wars Jedi: Fallen Order™ and follows Cal’s increasingly desperate fight as the galaxy descends further into darkness. Pushed to the edges of the galaxy by the Empire, Cal will find himself surrounded by threats new and familiar. As one of the last surviving Jedi Knights, Cal is driven to make a stand during the galaxy’s darkest times - but how far is he willing to go to protect himself, his crew, and the legacy of the Jedi Order?",
          stock: 20,
          image_url:
            "https://media.gamestop.com/i/gamestop/20002357-050e3a4b?$pdp2x$",
          price: 70,
          category: "game"
  
        },
        {
          name: "Dead Space ",
          description: "Xbox Series X",
          detailed_description: "The sci-fi survival horror classic Dead Space™ returns, completely rebuilt from the ground up to offer a deeper and more immersive experience. This remake brings jaw-dropping visual fidelity, suspenseful atmospheric audio, and improvements to gameplay while staying faithful to the original game’s thrilling vision.",
          stock: 20,
          image_url:
            "https://media.gamestop.com/i/gamestop/10067176-3f0862c?$pdp2x$",
          price: 44,
          category: "game"
  
        },
        {
            name: "Halo Infinite  ",
            description: "Xbox Series X",
            detailed_description: " Master Chief is back in his most epic adventure to date. Experience the ultimate gameplay and explore a stunning sci-fi world in this riveting, first person shooter video game. Halo Infinite release date Holiday 2021.",
            stock: 20,
            image_url:
              "https://media.gamestop.com/i/gamestop/11108375/Halo-Infinite---Xbox-Series-X?$pdp2x$",
            price: 29,
            category: "game"
    
          },
        
      ];
      const products = await Promise.all(productsToCreate.map(createProduct));
  
      console.log("products created:");
      console.log(products);
  
      console.log("Finished creating products!");
    } catch (error) {
      console.error("Error creating products!");
      throw error;
    }
  }
  
  async function createInitialCarts() {
    console.log("starting to create cart...");
  
    const cartsToCreate = [
      {
        userId: 1,
        isActive: false,
      },
      {
        userId: 1,
        isActive: false,
      },
    ];
  
    const carts = await Promise.all(
      cartsToCreate.map((cart) => createCart(cart.userId, cart.isActive))
    );
  
    console.log("Carts Created: ", carts);
    console.log("Finished creating carts.");
  }
  
  async function createInitialCartItems() {
    console.log("starting to create cart items...");
  
    const cartItemsToCreate = [
      
      
      {
        cartId: 1,
        productId: 2,
        price: 499,
        quantity: 1,
      },
      {
        cartId: 2,
        productId: 2,
        price: 499,
        quantity: 1,
      },
      {
        cartId: 3,
        productId: 3,
        price: 249,
        quantity: 1,
      },
      
      
  
    ];
  
    const cartItems = await Promise.all(
      cartItemsToCreate.map(addProductToCartItems)
    );
  
    console.log("Carts Created: ", cartItems);
    console.log("Finished creating carts.");
  }
  
  async function dropTables() {
    try {
      console.log("Starting to drop tables...");
  
      await client.query(`
          
        DROP TABLE IF EXISTS cart_items;
        DROP TABLE IF EXISTS cart;
        DROP TABLE IF EXISTS products;
          DROP TABLE IF EXISTS users;
        `);
  
      console.log("Finished dropping tables!");
    } catch (error) {
      console.error("Error dropping tables!");
      throw error;
    }
  }
  
  async function createTables() {
    try {
      console.log("Starting to build tables...");
  
      await client.query(`
          CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username varchar(255) UNIQUE NOT NULL,
            password varchar(255) NOT NULL,
            is_admin BOOLEAN DEFAULT false,
            email varchar(255) UNIQUE NOT NULL,
            address varchar(255)
          );
        `);
      
      await client.query(`
        CREATE TABLE products (
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description TEXT NOT NULL,
          detailed_description TEXT NOT NULL,
          stock INTEGER,
          image_url TEXT NOT NULL,
          price INTEGER,
          category TEXT
        );
        `);
  
      await client.query(`
        CREATE TABLE cart (
          id SERIAL PRIMARY KEY,
          "userId" INTEGER REFERENCES users(id),
          "isActive" BOOLEAN DEFAULT true
        );
        `);
  
      
      await client.query(`
          CREATE TABLE cart_items (
            id SERIAL PRIMARY KEY,
            "cartId" INTEGER REFERENCES cart(id),
            "productId" INTEGER REFERENCES products(id),
            price INTEGER, 
            quantity INTEGER,
            UNIQUE ("cartId", "productId")
          );
          `);
  
      console.log("Finished building tables!");
    } catch (error) {
      console.error("Error building tables!");
      throw error;
    }
  }
  
  async function rebuildDB() {
    try {
      client.connect();
  
      await dropTables();
      await createTables();
      await createInitialUsers();
      await createInitialProducts();
      await createInitialCarts();
      await createInitialCartItems();
  
      // await getCartByUser(1);
      // console.log("Testing Get Cart Items by Cart")
      // await getCartItemsByCart(1);
    
      console.log("Testing Get Cart Items by Cart")
    
  
    
    } catch (error) {
      console.log("error during rebuildDB");
      throw error;
    }
  }
  
  async function testDB() {
    try {
      console.log("Starting to test database...");
  
      console.log("Calling getAllUsers");
      const users = await getAllUsers();
      console.log("Result:", users);
  
      console.log("Calling getAllProducts");
      const products = await getAllProducts();
      console.log("Result:", products);
  
      console.log("Calling getAllCarts");
      const carts = await getAllCarts();
      console.log("Result:", carts);
  
      console.log("Calling getAllCartItems");
      const cartItems = await getAllCartItems();
      console.log("Result:", cartItems);
  
      console.log("Finished database tests!");
    } catch (error) {
      console.log("Error during testDB");
      throw error;
    }
  }
  
  rebuildDB()
    .then(testDB)
    .catch(console.error)
    .finally(() => client.end());
