window.onload = function() {
    let correctScore = 0;
    let incorrectScore = 0;

    let colors = ['#EA6B66', '#FFCC3B', '#00994D', '#0099CC', '#20B2AA', '#FF8C00', '#B5739D'];

    //Data for lefts and rights. This can be stored in a separate .js file, in a JSON file or here in the main file
    var data = {
        lefts: [{
            index: 0,
            text: "Chuyển đổi tín hiệu số thành tín hiệu tương tự và ngược lại để truyền dữ liệu Internet giữa ISP và thiết bị trong gia đình."
          }, {
            index: 1,
            text: "Truyền dữ liệu giữa các thiết bị trong cùng một mạng."
          }, {
            index: 2,
            text: "Truyền gói tin giữa các mạng khác nhau, đồng thời quyết định đường đi tối ưu cho gói tin."
          }, {
            index: 3,
            text: "Tạo ra vùng phủ sóng WiFi để mở rộng phạm vi kết nối không dây."
          },  
        ],
        rights: [{
            index: 0,
            text: "Modem"
          }, {
            index: 1,
            text: "Switch"
          }, {
            index: 2,
            text: "Router"
          }, {
            index: 3,
            text: "Access point"
          },  
        ],
        //this creates matches for indexes. This is a sort of an Answer Sheet
        pairs: {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
        }
    };
  
    var selectedLeft = null, //to make sure none is selected onload
        selectedRight = null,
        leftsContainer = document.querySelector("#lefts"), //list of lefts
        rightsContainer = document.querySelector("#rights"); //list of rights
  
    //This function takes two arguments, that is one term and one def to compare if they match. It returns True or False after compairing values of the "pairs" object property.     
    function isMatch(termIndex, defIndex) {
        return data.pairs[termIndex] === defIndex;
    }

    function tryMatching(selected_left, selected_right) {
        var left = document.querySelector("#lefts [data-index='" + selected_left + "']");
        var right = document.querySelector("#rights [data-index='" + selected_right + "']");
        if (isMatch(selected_left, selected_right)) {
            left.className = "matched";
            right.className = "matched";
            left.style.background = colors[selected_left];
            right.style.background = colors[selected_right];

            correctScore++;
            document.getElementById('correct-score').textContent = 'Số lần khớp đúng: ' + correctScore;
        }
        else
        {
            incorrectScore++;
            document.getElementById('incorrect-score').textContent = ' Số lần khớp sai: ' + incorrectScore;
        }

        left.removeAttribute("data-selected");
        right.removeAttribute("data-selected");
    }
  
    //This function adds HTML elements and content to the specified container (UL).
    function createListHTML(list, container) {
        container.innerHTML = ""; //first, clean up any existing LI elements
        for (var i = 0; i < data.lefts.length; i++) {
          container.innerHTML = container.innerHTML + "<li data-index='" + list[i]["index"] + "'>" + "<span>" + list[i]["text"] + "</span>" + "</li>";
          //OR shorter version: container.innerHTML += "<li data-index='" + list[i]["index"] + "'>" + list[i]["text"] + "</li>";
        }
    }
  
    createListHTML(data.lefts, leftsContainer);
    createListHTML(data.rights, rightsContainer);
  
    //listen for a "click" event on a list of lefts and store the clicked object in the target object
    leftsContainer.addEventListener("click", function(e) {
        var target = e.target.parentNode;
        
        if (target.className === "matched")
            return;
        
        var leftIndex = Number(target.getAttribute("data-index"));
        
        // if only one li can be selected
        if (selectedLeft !== null && selectedLeft !== leftIndex) {
            leftsContainer.querySelector("li[data-index='" + selectedLeft + "']").removeAttribute("data-selected");
        }
    
        // remove flag
        if (target.hasAttribute("data-selected")) {
            target.removeAttribute("data-selected");
            selectedLeft = null;
        }
        // mark the flag
        else {
            target.setAttribute("data-selected", true);
            selectedLeft = leftIndex;
        }
    
        if (selectedLeft !== null && selectedRight !== null) {      
            tryMatching(selectedLeft, selectedRight);
            selectedLeft = null;
            selectedRight = null;

        }
    })
  
    rightsContainer.addEventListener("click", function(e) {
        var target = e.target.parentNode;
        
        if (target.className === "matched")
            return;

        var defIndex = Number(target.getAttribute("data-index"));
    
        if (selectedRight !== null && selectedRight !== defIndex) {
            rightsContainer.querySelector("li[data-index='" + selectedRight + "']").removeAttribute("data-selected");
        }
    
        if (target.hasAttribute("data-selected"))
            target.removeAttribute("data-selected");
        else
            target.setAttribute("data-selected", true);
        
        selectedRight = Number(target.getAttribute("data-index"));
        
        if (selectedLeft !== null && selectedRight !== null) {           
            tryMatching(selectedLeft, selectedRight);
            selectedLeft = null;
            selectedRight = null;
        }
    })
  
    function reset() {
        var resetlefts = leftsContainer.querySelectorAll("li");
        var resetrights = rightsContainer.querySelectorAll("li");
        
        for (var i = 0; i < resetlefts.length; i++) {
            resetlefts[i].removeAttribute("class", "matched");
            resetlefts[i].removeAttribute("data-selected");
        }

        for (i = 0; i < resetrights.length; i++) {
            resetrights[i].removeAttribute("class", "matched");
            resetrights[i].removeAttribute("data-selected");
        }
    
        selectedLeft = null;
        selectedRight = null;

        correctScore = 0;
        document.getElementById('correct-score').textContent = 'Số lần khớp đúng: ' + correctScore;
        
        incorrectScore = 0;
        document.getElementById('incorrect-score').textContent = '&emsp;Số lần khớp sai: ' + incorrectScore;
    }
  
    // Fisher-Yates Shuffle
    function fisherYatesShuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }

    function shuffle() {
        randomSort(data.lefts);
        randomSort(data.rights);
        createListHTML(data.lefts, leftsContainer);
        createListHTML(data.rights, rightsContainer);
        fisherYatesShuffle(colors);
        console.log(colors);
    }
  
    function randomSort(array) {
        var currentIndex = array.length,
          temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {      
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
      
            // And swap it with the current element. SWAP
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return array;
    }
  
    shuffle();
    document.querySelector("button").addEventListener("click", function() {
        reset();
        leftsContainer.setAttribute("class", "fadeOut");
        rightsContainer.setAttribute("class", "fadeOut");
        setTimeout(function() {
            shuffle();
            leftsContainer.removeAttribute("class", "fadeOut");
            rightsContainer.removeAttribute("class", "fadeOut");
          }, 450)
          //shuffle();
    });
}