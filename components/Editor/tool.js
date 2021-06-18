export default class Video {
    static get toolbox() {
      return {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 16c0 1.104-.896 2-2 2h-12c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v8zm8-10l-6 4.223v3.554l6 4.223v-12z"/></svg>`,
        title: 'Video',
      };
    }
    constructor({data}){
        this.data = [];
        this.wrapper = undefined;
        this.settings = [
          {
            name: 'addContent',
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg>`
          },
          {
            name: 'addVideo',
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M450.6 153.6c-3.3 0-6.5.9-9.3 2.7l-86.5 54.6c-2.5 1.6-4 4.3-4 7.2v76c0 2.9 1.5 5.6 4 7.2l86.5 54.6c2.8 1.7 6 2.7 9.3 2.7h20.8c4.8 0 8.6-3.8 8.6-8.5v-188c0-4.7-3.9-8.5-8.6-8.5h-20.8zM273.5 384h-190C55.2 384 32 360.8 32 332.6V179.4c0-28.3 23.2-51.4 51.4-51.4h190c28.3 0 51.4 23.2 51.4 51.4v153.1c.1 28.3-23 51.5-51.3 51.5z"></path></svg>`
          },
        ];
      }
  
    render(){

        this.wrapper = document.createElement('div');
        this._initUI();
        return this.wrapper;
    }

    _initUI(){
      const inputContainer = document.createElement('div');
        const inputWrapper = document.createElement('div');
        const text = document.createElement('div');
        const input = document.createElement('input');
        const attachVideo = document.createElement('a');

        this.wrapper.classList.add('wrapper');
        inputContainer.classList.add('input-container');
        inputWrapper.classList.add('input-wrapper');
        input.classList.add('input-disable');
        text.classList.add('init-text');

        text.innerHTML = `<span class="init-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 16c0 1.104-.896 2-2 2h-12c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v8zm8-10l-6 4.223v3.554l6 4.223v-12z"/></svg></span><span>Drag and Drop video file or </span>`;
        attachVideo.innerHTML = 'Attach Video';
        text.appendChild(attachVideo);
        this.wrapper.appendChild(inputContainer);
        inputContainer.appendChild(inputWrapper);
        inputWrapper.appendChild(text);
        inputWrapper.appendChild(input);

        input.type = 'file';
        input.id = 'video';
        input.multiple = true;
        input.accept = 'video/*'

        attachVideo.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          this._editVideo()
        };
        inputContainer.ondragenter = () => inputContainer.classList.add('dashed-border');
        inputContainer.ondragover = () => inputContainer.classList.add('dashed-border');
        inputContainer.ondragleave = () => inputContainer.classList.remove('dashed-border');

        inputContainer.ondrop = (e) => {
          const files = e.dataTransfer.files;
          const filesArr = [...files];
          filesArr.map(file => this.data.push(file));
          this._createVideo(this.data);
        };

        inputContainer.onclick = () => input.click();
        input.onchange = (e) => {
          const files = e.target.files;
          const filesArr = [...files];
          filesArr.map(file => this.data.push(file));
          this._createVideo(this.data);
        }
    }

    _createVideo(files){
        console.log(files);
        if(files.length <= 0){
          this.wrapper.innerHTML = "";
          return this._initUI();
        }
        const header = `<h1 class="list-title"><i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z"></path></svg></i> <span>Videos</span></h1>`    
          
        const ul = document.createElement('ul');
        const listTitle = document.createElement('div');
        listTitle.innerHTML = header;
        ul.appendChild(listTitle);
        ul.classList.add('list-wrapper');

        files.map((file, idx) => {
          const li = document.createElement('li');
          const listContent = document.createElement('div');
          const iconWrapper = document.createElement('div');
          const playIcon = document.createElement('i');
          const editIcon = document.createElement('i');
          const delIcon = document.createElement('i');


          editIcon.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>';
          delIcon.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z"></path></g></svg>';
          playIcon.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path></svg>';


          iconWrapper.appendChild(editIcon);
          iconWrapper.appendChild(delIcon);
          listContent.innerHTML = (idx+1) + ': ' + file.name;

          playIcon.classList.add('play-icon');
          iconWrapper.classList.add('icon-wrapper');
          li.classList.add('list-item');

          li.appendChild(playIcon);
          li.appendChild(listContent);
          li.appendChild(iconWrapper);
          
          playIcon.onclick = () => this._playVideo();
          delIcon.onclick = () => this._deleteVideo(idx);
          editIcon.onclick = () => this._editVideo(idx);
         
          ul.appendChild(li);
        });

        this.wrapper.innerHTML = '';
        this.wrapper.appendChild(ul);
      }
    
    _playVideo(){

      const playContainer = document.createElement('div');
      const playWrapper = document.createElement('div');
      const closeIcon = document.createElement('i');

      playContainer.classList.add('play-container');
      playWrapper.classList.add('play-wrapper');
      closeIcon.classList.add('close-player');

      closeIcon.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>';

      const iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Zz6eOVaaelI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      playWrapper.innerHTML = iframe;
      playWrapper.appendChild(closeIcon);
      playContainer.appendChild(playWrapper);

      const body = document.querySelector('body');

      body.appendChild(playContainer);

      closeIcon.onclick = () => body.removeChild(playContainer);

    }
    
    _editVideo( index ){

      const data = [...this.data];
      const editableData = data.filter((file, idx) => idx === index);

      const editContainer = document.createElement('div');
      const editWrapper = document.createElement('div');
      const editHeader = document.createElement('div');
      const fieldWrapper1 = document.createElement('div');
      const fieldWrapper2 = document.createElement('div');

      const close = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>';
      const videoCam = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z"></path><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z"></path></svg>';



      const label1 = document.createElement('label');
      const label2 = document.createElement('label');

      const input1 = document.createElement('input');
      const input2 = document.createElement('input');

      const submit = document.createElement('button');
      

      editContainer.classList.add('edit-container');
      editWrapper.classList.add('edit-wrapper');
      editHeader.classList.add('edit-header');
      fieldWrapper1.classList.add('field-wrapper');
      fieldWrapper2.classList.add('field-wrapper');
      submit.classList.add('submit-button');

      label1.innerText = 'Video Title';
      label2.innerText = 'Video Link';
      input2.type = 'url';
      submit.innerText = 'Attach';
      editHeader.innerHTML = `<i>${videoCam}</i> <p>Attach Video</p><i id="close-edit">${close}</i>`

      input1.value = editableData.length > 0 ? editableData[0].name : '';
      input2.value = editableData.length > 0 ? editableData[0].link : '';

      fieldWrapper1.append(label1, input1);
      fieldWrapper2.append(label2, input2);

      editWrapper.appendChild(editHeader);
      editWrapper.append(fieldWrapper1, fieldWrapper2, submit);
      editContainer.appendChild(editWrapper);
      const body = document.querySelector('body');

      body.appendChild(editContainer);
      const closeHanlder = document.getElementById('close-edit');
      closeHanlder.onclick = () => body.removeChild(editContainer);

      submit.onclick = () => {
        const inputtedValue = {name: input1.value, link: input2.value};
        
        index !== undefined && index >= 0 ? data[index] = inputtedValue : data.push(inputtedValue);
       
        this.data = data;

        console.log("Main Data", this.data[index]);

        this._createVideo(this.data);
        body.removeChild(editContainer);
        
      }; 

    }

    _deleteVideo( index ){

      const data = [...this.data];
      const dataAfterDel = data.filter((file, idx) => idx !== index);
      
      this.data = dataAfterDel;
      
      this._createVideo(this.data);
    }
    _addVideo(){
      const input = document.createElement('input');
      this.wrapper.appendChild(input);

      input.type = 'file';
      input.multiple = true;
      input.classList.add('input-disable');

        input.click();
        input.onchange = (e) => {
          const files = e.target.files;
          const filesArr = [...files];
          filesArr.map(file => this.data.push(file));
          this._createVideo(this.data);
        }
    }
  
    save(blockContent){
        const input = blockContent.querySelector('input');
        return {
          url: input.files.name
        }
    }

    renderSettings(){
      const wrapper = document.createElement('div');
  
  
  
      this.settings.forEach( tune => {
        let button = document.createElement('div');
        button.classList.add('cdx-settings-button');
        button.setAttribute("id", tune.name);
        button.innerHTML = tune.icon;
        wrapper.appendChild(button);
        button.addEventListener('click', () => {
          if(tune.name === "addVideo")  this._addVideo();
          if(tune.name === "addContent")  this._editVideo();
          button.classList.toggle('cdx-settings-button--active');
        });
      });
  
      return wrapper;
    }
  }