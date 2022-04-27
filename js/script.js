window.addEventListener("load", function () {
    const posts_container = document.getElementById("posts");
    const wrapper = document.getElementsByClassName("wrapper")[0];
    const filter = document.getElementById("filter");
    let posts = []
    let filtered_posts = []
    let random_data_string = "";
    (function () {
        random_data_string = "His parents continued to question him. He didn't know what to say to them since they " +
            "refused to believe the truth. He explained again and again, and they dismissed his explanation as a figment " +
            "of his imagination. There was no way that grandpa, who had been dead for five years, could have told him " +
            "where the treasure had been hidden. Of course, it didn't help that grandpa was roaring with laughter in " +
            "the chair next to him as he tried to explain once again how he'd found it. Mary had to make a decision and " +
            "she knew that whatever decision she made, it would upset someone. It seemed like such a silly reason for " +
            "people to get upset but she knew the minute that she began to consider doing it that there was no way " +
            "everyone in her life would be pleased with what she ultimately decided to do. It was simply a question of " +
            "who she would rather displease most. While this had always been her parents, and especially her mom, in the " +
            "past that she tried to keep from upsetting, she decided that this time the person she was going to please " +
            "the most with her decision was herself. Balloons are pretty and come in different colors, different " +
            "shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might" +
            " just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a " +
            "variety of purposes, from decorating to water balloon wars. You just have to use your head to think a " +
            "little bit about what to do with them. It really shouldn't have mattered to Betty. That's what she " +
            "kept trying to convince herself even if she knew it mattered to Betty more than practically anything else." +
            "Why was she trying to convince herself otherwise? As she stepped forward to knock on Betty's door, she still" +
            " didn't have a convincing answer to this question that she'd been asking herself for more than two years now." +
            "Do Not Enter. The sign made it clear that they didn't want anyone around. That wasn't going to stop Jack. " +
            "Jack always lived with the notion that signs were mere suggestions, not actually absolute rules. That's " +
            "why the moment Jack looked at the \"Do Not Enter\" sign, he walked past it and onto their property. Sleeping " +
            "in his car was never the plan but sometimes things don't work out as planned. This had been his life for the " +
            "last three months and he was just beginning to get used to it. He didn't actually enjoy it, but he had " +
            "accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the key " +
            "into the ignition, turned it and the engine didn't make a sound. It wasn't that he hated her. It was " +
            "simply that he didn't like her much. It was difficult for him to explain this to her, and even more difficult" +
            " for her to truly understand. She was in love and wanted him to feel the same way. He didn't, and no matter" +
            " how he tried to explain to her she refused to listen or to understand. The desert wind blew the tumbleweed " +
            "in front of the car. Alex swerved to avoid the tumbleweed, but he turned the wheel a bit too strong and the " +
            "car left the road and skidded onto the dirt median. He instantly slammed on the brakes and the car stopped in" +
            " a cloud of dirt. When the dust cloud had settled and he could see around him again, he realized that he'd " +
            "somehow crossed over into an entirely new dimension. There was a time when he would have embraced the" +
            " change that was coming. In his youth, he sought adventure and the unknown, but that had been years ago. He" +
            " wished he could go back and learn to find the excitement that came with change but it was useless. " +
            "That curiosity had long left him to where he had come to loathe anything that put him out of his comfort" +
            " zone. She tried to explain that love wasn't like pie. There wasn't a set number of slices to be given out." +
            " There wasn't less to be given to one person if you wanted to give more to another. That after a set amount" +
            " was given out it would all disappear. She tried to explain this, but it fell on deaf ears. They rushed out " +
            "the door, grabbing anything and everything they could think of they might need. There was no time to double-" +
            "check to make sure they weren't leaving something important behind. Everything was thrown into the car and " +
            "they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had " +
            "forgotten the most important thing of all. I guess we could discuss the implications of the phrase " +
            "\"meant to be.\" That is if we wanted to drown ourselves in a sea of backwardly referential semantics and " +
            "other mumbo-jumbo. Maybe such a discussion would result in the determination that \"meant to be\" is exactly " +
            "as meaningless a phrase as it seems to be, and that none of us is actually meant to be doing anything at all." +
            " But that's my existential underpants underpinnings showing. It's the way the cookie crumbles. And now I want" +
            " a cookie. After hunting for several hours, we finally saw a large seal sunning itself on a flat rock. I " +
            "took one of the wooden clubs while Larry took the longer one. We slowly snuck up behind the seal until we " +
            "were close enough to club it over its head. The seal slumped over and died. This seal would help us survive." +
            " We could eat the meat and fat. The fat could be burned in a shell for light and the fur could be used to " +
            "make a blanket. We declared our first day of hunting a great success. There wasn't a whole lot more that " +
            "could be done. It had become a wait-and-see situation with the final results no longer in her control. " +
            "That didn't stop her from trying to control the situation. She demanded that things be done as she " +
            "desperately tried to control what couldn't be. It was a concerning development that he couldn't get out of" +
            " his mind. He'd had many friends throughout his early years and had fond memories of playing with them, but" +
            " he couldn't understand how it had all stopped. There was some point as he grew up that he played with each" +
            " of his friends for the very last time, and he had no idea that it would be the last. Do you really listen" +
            " when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes " +
            "every word you say as being something important and when you have a friend that listens like that, words " +
            "take on a whole new meaning. There was no ring on his finger. That was a good sign although far from proof" +
            " that he was available. Still, it was much better than if he had been wearing a wedding ring on his hand. " +
            "She glanced at his hand a bit more intently to see if there were any tan lines where a ring may have been," +
            " and he's simply taken it off. She couldn't detect any which was also a good sign and a relief. The next" +
            " step would be to get access to his wallet to see if there were any family photos in it.";
    })();

    const throttle = (fn, wait) => {
        let inThrottle, lastFn, lastTime;
        return function () {
            const context = this,
                args = arguments;
            if (!inThrottle) {
                fn.apply(context, args);
                lastTime = Date.now();
                inThrottle = true;
            } else {
                clearTimeout(lastFn);
                lastFn = setTimeout(function () {
                    if (Date.now() - lastTime >= wait) {
                        fn.apply(context, args);
                        lastTime = Date.now();
                    }
                }, Math.max(wait - (Date.now() - lastTime), 0));
            }
        };
    };

    function highlight_searched_text(text, searched) {
        let regex = new RegExp(searched, "g");
        return text.replace(regex, `<mark>${searched}</mark>`);
    }

    function highlight_post(post) {
        post.msg = highlight_searched_text(post.msg, filter.value)
        post.title = highlight_searched_text(post.title, filter.value)
        return post;
    }

    function highlight_posts() {
        filtered_posts = filtered_posts.map(highlight_post);
    }

    function my_filter(post) {
        return post.title.toLowerCase().includes(filter.value.toLowerCase()) ||
            post.msg.toLowerCase().includes(filter.value.toLowerCase());
    }

    function filter_posts() {
        while(filtered_posts.length>0)
            filtered_posts.pop();
        posts.forEach(function (post) {
           if(my_filter(post)){
               filtered_posts.push({
                   number: post.number,
                   title: post.title,
                   msg: post.msg
               });
           }
        });
    }


    filter.addEventListener("input", throttle(function () {
        filter_posts(posts);
        if(filter.value.length>0)
            highlight_posts(filtered_posts);
        clear_post_container(posts_container);
        add_posts(filtered_posts)
    }, 1500));

    function load_posts(posts) {
        generate_posts();
        clear_post_container(posts_container);
        add_posts(posts)
    }

    function generate_posts() {
        for (let i = 0; i < 10; i++) {
            let start_index = generate_random_index();
            let end_index = generate_random_index(start_index + 20, start_index + 30);
            let post_title = random_data_string.slice(start_index, end_index).trim().replace(/[^a-z0-9\s]/gi, '');
            start_index = generate_random_index();
            end_index = generate_random_index(start_index + 99, start_index + 299);
            let post_msg = random_data_string.slice(start_index, end_index).trim().replace(/[^a-z0-9\s]/gi, '');

            let post = {
                number: posts.length + 1,
                title: post_title,
                msg: post_msg
            }
            posts.push(post);
        }
    }

    function clear_post_container(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    function add_posts(posts) {
        posts.forEach(function (post) {
            posts_container.appendChild(create_post(post));
        });
    }

    function create_post(post) {
        let row = document.createElement("DIV");
        row.setAttribute("class", "row");

        let post_no = document.createElement("DIV");
        post_no.setAttribute("class", "post_no");
        post_no.innerText = post.number.toString();
        row.appendChild(post_no);

        let post_title = document.createElement("H1");
        post_title.setAttribute("class", "title");
        post_title.innerHTML = post.title;
        row.appendChild(post_title);

        let post_msg = document.createElement("P");
        post_msg.setAttribute("class", "body");
        post_msg.innerHTML = post.msg;
        row.appendChild(post_msg);

        return row;
    }

    function generate_random_index(min = 0, max = random_data_string.length - 300) {
        let difference = max - min;
        let rand = Math.random();
        rand = Math.floor(rand * difference);
        rand = rand + min;
        return rand;
    }

    document.addEventListener("scroll", throttle(function () {
        if (window.scrollY + window.innerHeight >= wrapper.clientHeight) {
            if(filter.value.length===0)
                load_posts(posts)
        }
    }, 1500));


    load_posts(posts);

});
