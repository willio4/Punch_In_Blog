import express from "express";
import methodOverride from "method-override";




let articles = [];

const app = express();
const port = 3000;

function getTime() {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const year = new Date().getFullYear();
    return `${month}/${day}/${year}`;
}

// Set EJS as the view engine
app.set("view engine", "ejs");

// Built-in Express middleware replaces body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Serve static files from "public"
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs", {
    articles: articles,
  });
});

app.get("/drakebrent", (req, res) => {
  res.render("drakebrent.ejs", {
    articles: articles,
  });
});

app.get("/concrete", (req, res) => {
  res.render("concrete.ejs", {
    articles: articles,
  });
});

app.get("/dreamtde", (req, res) => {
  res.render("dreamtde.ejs", {
    articles: articles,
  });
});

app.get("/yeat", (req, res) => {
  res.render("yeat.ejs", {
    articles: articles,
  });
});

app.get("/szasummer", (req, res) => {
  res.render("szasummer.ejs", {
    articles: articles,
  });
});

app.get("/griselda", (req, res) => {
  res.render("griselda.ejs", {
    articles: articles,
  });
});

app.patch("/edit/:id", (req, res) => {
  const index = req.params.id - 1;
  const url = articles[index].url

  articles[index].title = req.body.title;
  articles[index].author = req.body.author;
  articles[index].content = req.body.content;

  res.redirect(url);
});







// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// creation of articles
articles = [
    {
      id: 1, 
      title: "Drake, Brent Faiyaz, and the Blur Between Rap and R&B",
      author: "Omar Williams" ,
      content: "Phasellus feugiat sapien ex, eu bibendum dui lacinia nec. Vestibulum semper hendrerit diam, eu vestibulum eros euismod quis. Nam id urna sed leo dictum accumsan. In mollis, risus et malesuada sagittis, lacus orci cursus felis, sit amet blandit odio urna at purus. Phasellus laoreet, libero sed maximus faucibus, sapien lorem condimentum odio, vitae consectetur justo nisi ut lacus. Morbi viverra, velit et volutpat varius, tortor nisl bibendum nibh, vel sagittis felis lectus eget nibh. <br><br>Maecenas pellentesque mauris sit amet mollis placerat. Nunc finibus malesuada dolor, nec facilisis ante volutpat vitae. Vivamus in odio lacus. Cras turpis arcu, pretium vel turpis pulvinar, consectetur scelerisque quam. Suspendisse sed quam ac ligula porttitor mattis. Quisque auctor ligula eleifend, laoreet enim vitae, varius nisl. Quisque nec nibh eleifend, pulvinar turpis eget, fringilla justo. <br><br>Duis aliquet arcu venenatis, dignissim justo id, lobortis tellus. Nam hendrerit tellus ut nulla tempor, sed congue orci elementum. Ut vitae justo porttitor orci lobortis auctor eget sit amet lorem. Aliquam lobortis efficitur cursus. Etiam non dui massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br><br>Praesent posuere egestas velit sit amet molestie. Nulla facilisi. Fusce porta, est sed scelerisque ultricies, quam sem pharetra nibh, vitae ultricies sapien nisl in mauris. In at nunc et sem lobortis consectetur. Nam volutpat vitae dolor vitae gravida. Nullam vitae aliquam orci, vitae sagittis felis. Duis pellentesque hendrerit felis, blandit iaculis dolor maximus sit amet. Nullam congue malesuada massa, ac lobortis dui placerat sit amet. Duis eu maximus enim. Integer blandit risus justo, vel tincidunt arcu cursus vel. <br><br>Donec dictum ac purus sed suscipit. Sed ultrices nunc eget metus pellentesque elementum. Fusce consectetur sagittis nulla, vitae rhoncus libero mattis nec. Maecenas posuere finibus tincidunt. Aenean nulla diam, feugiat vitae dolor eu, finibus vulputate metus.",
      date: getTime(),
      img: "/images/drakebrent.jpg",
      url: "/drakebrent",
    },
    {
      id: 2,
      title: "Opium, Concrete Boys, and the New Sound of Chaos",
      author: "Omar Williams",
      content: "Phasellus feugiat sapien ex, eu bibendum dui lacinia nec. Vestibulum semper hendrerit diam, eu vestibulum eros euismod quis. Nam id urna sed leo dictum accumsan. In mollis, risus et malesuada sagittis, lacus orci cursus felis, sit amet blandit odio urna at purus. Phasellus laoreet, libero sed maximus faucibus, sapien lorem condimentum odio, vitae consectetur justo nisi ut lacus. Morbi viverra, velit et volutpat varius, tortor nisl bibendum nibh, vel sagittis felis lectus eget nibh. <br><br>Maecenas pellentesque mauris sit amet mollis placerat. Nunc finibus malesuada dolor, nec facilisis ante volutpat vitae. Vivamus in odio lacus. Cras turpis arcu, pretium vel turpis pulvinar, consectetur scelerisque quam. Suspendisse sed quam ac ligula porttitor mattis. Quisque auctor ligula eleifend, laoreet enim vitae, varius nisl. Quisque nec nibh eleifend, pulvinar turpis eget, fringilla justo. <br><br>Duis aliquet arcu venenatis, dignissim justo id, lobortis tellus. Nam hendrerit tellus ut nulla tempor, sed congue orci elementum. Ut vitae justo porttitor orci lobortis auctor eget sit amet lorem. Aliquam lobortis efficitur cursus. Etiam non dui massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br><br>Praesent posuere egestas velit sit amet molestie. Nulla facilisi. Fusce porta, est sed scelerisque ultricies, quam sem pharetra nibh, vitae ultricies sapien nisl in mauris. In at nunc et sem lobortis consectetur. Nam volutpat vitae dolor vitae gravida. Nullam vitae aliquam orci, vitae sagittis felis. Duis pellentesque hendrerit felis, blandit iaculis dolor maximus sit amet. Nullam congue malesuada massa, ac lobortis dui placerat sit amet. Duis eu maximus enim. Integer blandit risus justo, vel tincidunt arcu cursus vel. <br><br>Donec dictum ac purus sed suscipit. Sed ultrices nunc eget metus pellentesque elementum. Fusce consectetur sagittis nulla, vitae rhoncus libero mattis nec. Maecenas posuere finibus tincidunt. Aenean nulla diam, feugiat vitae dolor eu, finibus vulputate metus.",
      date: getTime(),
      img: "/images/concrete.jpeg",
      url: "/concrete",
    },
    {
      id: 3,
      title: "From TDE to Dreamville: Who’s Really Moving the Culture Now",
      author: "Omar Williams",
      content: "Phasellus feugiat sapien ex, eu bibendum dui lacinia nec. Vestibulum semper hendrerit diam, eu vestibulum eros euismod quis. Nam id urna sed leo dictum accumsan. In mollis, risus et malesuada sagittis, lacus orci cursus felis, sit amet blandit odio urna at purus. Phasellus laoreet, libero sed maximus faucibus, sapien lorem condimentum odio, vitae consectetur justo nisi ut lacus. Morbi viverra, velit et volutpat varius, tortor nisl bibendum nibh, vel sagittis felis lectus eget nibh. <br><br>Maecenas pellentesque mauris sit amet mollis placerat. Nunc finibus malesuada dolor, nec facilisis ante volutpat vitae. Vivamus in odio lacus. Cras turpis arcu, pretium vel turpis pulvinar, consectetur scelerisque quam. Suspendisse sed quam ac ligula porttitor mattis. Quisque auctor ligula eleifend, laoreet enim vitae, varius nisl. Quisque nec nibh eleifend, pulvinar turpis eget, fringilla justo. <br><br>Duis aliquet arcu venenatis, dignissim justo id, lobortis tellus. Nam hendrerit tellus ut nulla tempor, sed congue orci elementum. Ut vitae justo porttitor orci lobortis auctor eget sit amet lorem. Aliquam lobortis efficitur cursus. Etiam non dui massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br><br>Praesent posuere egestas velit sit amet molestie. Nulla facilisi. Fusce porta, est sed scelerisque ultricies, quam sem pharetra nibh, vitae ultricies sapien nisl in mauris. In at nunc et sem lobortis consectetur. Nam volutpat vitae dolor vitae gravida. Nullam vitae aliquam orci, vitae sagittis felis. Duis pellentesque hendrerit felis, blandit iaculis dolor maximus sit amet. Nullam congue malesuada massa, ac lobortis dui placerat sit amet. Duis eu maximus enim. Integer blandit risus justo, vel tincidunt arcu cursus vel. <br><br>Donec dictum ac purus sed suscipit. Sed ultrices nunc eget metus pellentesque elementum. Fusce consectetur sagittis nulla, vitae rhoncus libero mattis nec. Maecenas posuere finibus tincidunt. Aenean nulla diam, feugiat vitae dolor eu, finibus vulputate metus.",
      date: getTime(),
      img: "/images/dreamtde.jpeg",
      url: "/dreamtde",
    },
    {
      id: 4,
      title: "Yeat, Ken Carson, and Why Energy Matters More Than Lyrics Right Now",
      author: "Omar Williams",
      content: "Phasellus feugiat sapien ex, eu bibendum dui lacinia nec. Vestibulum semper hendrerit diam, eu vestibulum eros euismod quis. Nam id urna sed leo dictum accumsan. In mollis, risus et malesuada sagittis, lacus orci cursus felis, sit amet blandit odio urna at purus. Phasellus laoreet, libero sed maximus faucibus, sapien lorem condimentum odio, vitae consectetur justo nisi ut lacus. Morbi viverra, velit et volutpat varius, tortor nisl bibendum nibh, vel sagittis felis lectus eget nibh. <br><br>Maecenas pellentesque mauris sit amet mollis placerat. Nunc finibus malesuada dolor, nec facilisis ante volutpat vitae. Vivamus in odio lacus. Cras turpis arcu, pretium vel turpis pulvinar, consectetur scelerisque quam. Suspendisse sed quam ac ligula porttitor mattis. Quisque auctor ligula eleifend, laoreet enim vitae, varius nisl. Quisque nec nibh eleifend, pulvinar turpis eget, fringilla justo. <br><br>Duis aliquet arcu venenatis, dignissim justo id, lobortis tellus. Nam hendrerit tellus ut nulla tempor, sed congue orci elementum. Ut vitae justo porttitor orci lobortis auctor eget sit amet lorem. Aliquam lobortis efficitur cursus. Etiam non dui massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br><br>Praesent posuere egestas velit sit amet molestie. Nulla facilisi. Fusce porta, est sed scelerisque ultricies, quam sem pharetra nibh, vitae ultricies sapien nisl in mauris. In at nunc et sem lobortis consectetur. Nam volutpat vitae dolor vitae gravida. Nullam vitae aliquam orci, vitae sagittis felis. Duis pellentesque hendrerit felis, blandit iaculis dolor maximus sit amet. Nullam congue malesuada massa, ac lobortis dui placerat sit amet. Duis eu maximus enim. Integer blandit risus justo, vel tincidunt arcu cursus vel. <br><br>Donec dictum ac purus sed suscipit. Sed ultrices nunc eget metus pellentesque elementum. Fusce consectetur sagittis nulla, vitae rhoncus libero mattis nec. Maecenas posuere finibus tincidunt. Aenean nulla diam, feugiat vitae dolor eu, finibus vulputate metus.",
      date: getTime(),
      img: "/images/yeat.jpeg",
      url: "/yeat",
    },
    {
      id: 5,
      title: "SZA, Summer Walker, and the Era of Emotional Minimalism",
      author: "Omar Williams",
      content: "Phasellus feugiat sapien ex, eu bibendum dui lacinia nec. Vestibulum semper hendrerit diam, eu vestibulum eros euismod quis. Nam id urna sed leo dictum accumsan. In mollis, risus et malesuada sagittis, lacus orci cursus felis, sit amet blandit odio urna at purus. Phasellus laoreet, libero sed maximus faucibus, sapien lorem condimentum odio, vitae consectetur justo nisi ut lacus. Morbi viverra, velit et volutpat varius, tortor nisl bibendum nibh, vel sagittis felis lectus eget nibh. <br><br>Maecenas pellentesque mauris sit amet mollis placerat. Nunc finibus malesuada dolor, nec facilisis ante volutpat vitae. Vivamus in odio lacus. Cras turpis arcu, pretium vel turpis pulvinar, consectetur scelerisque quam. Suspendisse sed quam ac ligula porttitor mattis. Quisque auctor ligula eleifend, laoreet enim vitae, varius nisl. Quisque nec nibh eleifend, pulvinar turpis eget, fringilla justo. <br><br>Duis aliquet arcu venenatis, dignissim justo id, lobortis tellus. Nam hendrerit tellus ut nulla tempor, sed congue orci elementum. Ut vitae justo porttitor orci lobortis auctor eget sit amet lorem. Aliquam lobortis efficitur cursus. Etiam non dui massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br><br>Praesent posuere egestas velit sit amet molestie. Nulla facilisi. Fusce porta, est sed scelerisque ultricies, quam sem pharetra nibh, vitae ultricies sapien nisl in mauris. In at nunc et sem lobortis consectetur. Nam volutpat vitae dolor vitae gravida. Nullam vitae aliquam orci, vitae sagittis felis. Duis pellentesque hendrerit felis, blandit iaculis dolor maximus sit amet. Nullam congue malesuada massa, ac lobortis dui placerat sit amet. Duis eu maximus enim. Integer blandit risus justo, vel tincidunt arcu cursus vel. <br><br>Donec dictum ac purus sed suscipit. Sed ultrices nunc eget metus pellentesque elementum. Fusce consectetur sagittis nulla, vitae rhoncus libero mattis nec. Maecenas posuere finibus tincidunt. Aenean nulla diam, feugiat vitae dolor eu, finibus vulputate metus.",
      date: getTime(),
      img: "/images/szasummer.jpg",
      url: "/szasummer",
    },
    {
      id: 6,
      title: "Griselda, Freddie Gibbs, and the Return of Raw Rap",
      author: "Omar Williams",
      content: "Phasellus feugiat sapien ex, eu bibendum dui lacinia nec. Vestibulum semper hendrerit diam, eu vestibulum eros euismod quis. Nam id urna sed leo dictum accumsan. In mollis, risus et malesuada sagittis, lacus orci cursus felis, sit amet blandit odio urna at purus. Phasellus laoreet, libero sed maximus faucibus, sapien lorem condimentum odio, vitae consectetur justo nisi ut lacus. Morbi viverra, velit et volutpat varius, tortor nisl bibendum nibh, vel sagittis felis lectus eget nibh. <br><br>Maecenas pellentesque mauris sit amet mollis placerat. Nunc finibus malesuada dolor, nec facilisis ante volutpat vitae. Vivamus in odio lacus. Cras turpis arcu, pretium vel turpis pulvinar, consectetur scelerisque quam. Suspendisse sed quam ac ligula porttitor mattis. Quisque auctor ligula eleifend, laoreet enim vitae, varius nisl. Quisque nec nibh eleifend, pulvinar turpis eget, fringilla justo. <br><br>Duis aliquet arcu venenatis, dignissim justo id, lobortis tellus. Nam hendrerit tellus ut nulla tempor, sed congue orci elementum. Ut vitae justo porttitor orci lobortis auctor eget sit amet lorem. Aliquam lobortis efficitur cursus. Etiam non dui massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br><br>Praesent posuere egestas velit sit amet molestie. Nulla facilisi. Fusce porta, est sed scelerisque ultricies, quam sem pharetra nibh, vitae ultricies sapien nisl in mauris. In at nunc et sem lobortis consectetur. Nam volutpat vitae dolor vitae gravida. Nullam vitae aliquam orci, vitae sagittis felis. Duis pellentesque hendrerit felis, blandit iaculis dolor maximus sit amet. Nullam congue malesuada massa, ac lobortis dui placerat sit amet. Duis eu maximus enim. Integer blandit risus justo, vel tincidunt arcu cursus vel. <br><br>Donec dictum ac purus sed suscipit. Sed ultrices nunc eget metus pellentesque elementum. Fusce consectetur sagittis nulla, vitae rhoncus libero mattis nec. Maecenas posuere finibus tincidunt. Aenean nulla diam, feugiat vitae dolor eu, finibus vulputate metus.",
      date: getTime(),
      img: "/images/griselda.jpg",
      url: "/griselda",
    },
]