// document.addEventListener('DOMContentLoaded', () => {
//     const fileInput = document.getElementById('fileInput');
//     const fileList = document.getElementById('fileList');
//     const audioPlayer = document.getElementById('audioPlayer');
//     const playPauseButton = document.getElementById('playPauseButton');
//     const prevButton = document.getElementById('prevButton');
//     const nextButton = document.getElementById('nextButton');
//     const genreSelect = document.getElementById('genreSelect');

//     let audioFiles = [];
//     let currentTrackIndex = 0;
//     const maxFiles = 20;

//     // Fetch MP3 files based on selected genre
//     genreSelect.addEventListener('change', fetchMp3Files);
//     fetchMp3Files(); // Initial fetch

//     function fetchMp3Files() {
//         const genre = genreSelect.value;
//         const rFolderFilesPop = [
//             'Love Song-Uru.mp3', 
//             'We Found Love-Rihanna.mp3',
//             'Dragon Night.mp3', 
//             'Stick Figure.mp3', 
//             'Wasted Nights.mp3',
//             'when I was king.mp3',
//             '太陽は見上げる人を選ばない.mp3', 
//             '泣き地蔵.mp3', 
//             '置き手紙.mp3', 
//             '蝶々結び.mp3', 
//             '裸の勇者.mp3',
//             'High Land.mp3',
//             'Ghost.mp3'
//         ];
        
//         const rFolderFilesHiphop = [
//             'HANABI.mp3',
//             'High Land.mp3',
//             'Lonely Nights.mp3',
//             'Rosemary.mp3',
//             'Two.mp3',
//             'アンマー.mp3',
//             'ノアの方舟.mp3',
//             '曖歌.mp3'
//         ];

//         let selectedFiles = genre === 'hiphop' ? rFolderFilesHiphop : rFolderFilesPop;
//         audioFiles = selectedFiles.map(file => ({
//             name: file,
//             url: `./rFolder/${genre}/${file}`
//         }));
//         displayFileList();
//     }

//     fileInput.addEventListener('change', () => {
//         const files = Array.from(fileInput.files);
//         const newFiles = files.slice(0, maxFiles - audioFiles.length);
//         audioFiles = audioFiles.concat(newFiles.map(file => ({
//             name: file.name,
//             url: URL.createObjectURL(file)
//         })));

//         if (audioFiles.length > maxFiles) {
//             audioFiles = audioFiles.slice(0, maxFiles);
//         }

//         displayFileList();
//     });

//     function displayFileList() {
//         fileList.innerHTML = '';
//         audioFiles.forEach((file, index) => {
//             const listItem = document.createElement('div');
//             listItem.className = 'file-item';

//             const dragHandle = document.createElement('span');
//             dragHandle.textContent = '︙';
//             dragHandle.className = 'drag-handle';

//             const fileName = document.createElement('span');
//             const displayName = file.name.replace(/\.mp3$/i, '');
//             fileName.textContent = `${index + 1}. ${displayName}`;
//             fileName.addEventListener('click', () => {
//                 playTrack(index);
//             });

//             const deleteButton = document.createElement('button');
//             deleteButton.className = 'delete-button';
//             deleteButton.innerHTML = '&times;';
//             deleteButton.addEventListener('click', (event) => {
//                 event.stopPropagation();
//                 removeTrack(index);
//             });

//             listItem.appendChild(dragHandle);
//             listItem.appendChild(fileName);
//             listItem.appendChild(deleteButton);
//             fileList.appendChild(listItem);
//         });

//         new Sortable(fileList, {
//             handle: '.drag-handle',
//             animation: 150,
//             onEnd: function (evt) {
//                 const [movedItem] = audioFiles.splice(evt.oldIndex, 1);
//                 audioFiles.splice(evt.newIndex, 0, movedItem);
//                 displayFileList();
//             }
//         });
//     }

//     function playTrack(index) {
//         if (index >= 0 && index < audioFiles.length) {
//             currentTrackIndex = index;
//             const url = audioFiles[index].url;
//             audioPlayer.src = url;
//             audioPlayer.play();
//             updatePlayPauseButton(true);
//         }
//     }

//     function removeTrack(index) {
//         audioFiles.splice(index, 1);
//         if (currentTrackIndex >= index) {
//             currentTrackIndex = Math.max(0, currentTrackIndex - 1);
//         }
//         displayFileList();
//         if (audioFiles.length === 0) {
//             audioPlayer.pause();
//             audioPlayer.src = '';
//             updatePlayPauseButton(false);
//         } else {
//             playTrack(currentTrackIndex);
//         }
//     }

//     playPauseButton.addEventListener('click', () => {
//         if (audioPlayer.paused) {
//             audioPlayer.play();
//             updatePlayPauseButton(true);
//         } else {
//             audioPlayer.pause();
//             updatePlayPauseButton(false);
//         }
//     });

//     prevButton.addEventListener('click', () => {
//         if (currentTrackIndex > 0) {
//             playTrack(currentTrackIndex - 1);
//         } else {
//             playTrack(audioFiles.length - 1);
//         }
//     });

//     nextButton.addEventListener('click', () => {
//         if (currentTrackIndex < audioFiles.length - 1) {
//             playTrack(currentTrackIndex + 1);
//         } else {
//             playTrack(0);
//         }
//     });

//     audioPlayer.addEventListener('ended', () => {
//         if (currentTrackIndex < audioFiles.length - 1) {
//             playTrack(currentTrackIndex + 1);
//         } else {
//             playTrack(0);
//         }
//     });

//     function updatePlayPauseButton(isPlaying) {
//         if (isPlaying) {
//             playPauseButton.classList.remove('play');
//             playPauseButton.classList.add('pause');
//             playPauseButton.style.backgroundImage = "url('rMusicPause.png')";
//         } else {
//             playPauseButton.classList.remove('pause');
//             playPauseButton.classList.add('play');
//             playPauseButton.style.backgroundImage = "url('rMusicPlay.png')";
//         }
//     }
// });






























document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const genreSelect = document.getElementById('genreSelect');

    let audioFiles = [];
    let currentTrackIndex = 0;
    const maxFiles = 20;

    // Fetch MP3 files based on selected genre
    genreSelect.addEventListener('change', fetchMp3Files);
    fetchMp3Files(); // Initial fetch

    function fetchMp3Files() {
        const genre = genreSelect.value;
        const rFolderFilesPop = [
            'Love Song-Uru.mp3', 
            'We Found Love-Rihanna.mp3',
            'Dragon Night.mp3', 
            'Stick Figure.mp3', 
            'Wasted Nights.mp3',
            'when I was king.mp3',
            '太陽は見上げる人を選ばない.mp3', 
            '泣き地蔵.mp3', 
            '置き手紙.mp3', 
            '蝶々結び.mp3', 
            '裸の勇者.mp3',
            'High Land.mp3',
            'Ghost.mp3'
        ];
        
        const rFolderFilesHiphop = [
            'HANABI.mp3',
            'High Land.mp3',
            'Lonely Nights.mp3',
            'Rosemary.mp3',
            'Two.mp3',
            'アンマー.mp3',
            'ノアの方舟.mp3',
            '曖歌.mp3'
        ];

        let selectedFiles = genre === 'hiphop' ? rFolderFilesHiphop : rFolderFilesPop;
        audioFiles = selectedFiles.map(file => ({
            name: file,
            url: `./rFolder/${genre}/${file}`
        }));
        displayFileList();
    }

    fileInput.addEventListener('change', () => {
        const files = Array.from(fileInput.files);
        const newFiles = files.slice(0, maxFiles - audioFiles.length);
        audioFiles = audioFiles.concat(newFiles.map(file => ({
            name: file.name,
            url: URL.createObjectURL(file)
        })));

        if (audioFiles.length > maxFiles) {
            audioFiles = audioFiles.slice(0, maxFiles);
        }

        displayFileList();
    });

    function displayFileList() {
        fileList.innerHTML = '';
        audioFiles.forEach((file, index) => {
            const listItem = document.createElement('div');
            listItem.className = 'file-item';

            const dragHandle = document.createElement('span');
            dragHandle.textContent = '︙';
            dragHandle.className = 'drag-handle';

            const fileName = document.createElement('span');
            const displayName = file.name.replace(/\.mp3$/i, '');
            fileName.textContent = `${index + 1}. ${displayName}`;
            fileName.addEventListener('click', () => {
                playTrack(index);
            });

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.innerHTML = '&times;';
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation();
                removeTrack(index);
            });

            listItem.appendChild(dragHandle);
            listItem.appendChild(fileName);
            listItem.appendChild(deleteButton);
            fileList.appendChild(listItem);
        });

        new Sortable(fileList, {
            handle: '.drag-handle',
            animation: 150,
            onEnd: function (evt) {
                const [movedItem] = audioFiles.splice(evt.oldIndex, 1);
                audioFiles.splice(evt.newIndex, 0, movedItem);
                displayFileList();
            }
        });
    }

    function playTrack(index) {
        if (index >= 0 && index < audioFiles.length) {
            currentTrackIndex = index;
            const url = audioFiles[index].url;
            audioPlayer.src = url;
            audioPlayer.play();
            updatePlayPauseButton(true);
        }
    }

    function removeTrack(index) {
        audioFiles.splice(index, 1);
        if (currentTrackIndex >= index) {
            currentTrackIndex = Math.max(0, currentTrackIndex - 1);
        }
        displayFileList();
        if (audioFiles.length === 0) {
            audioPlayer.pause();
            audioPlayer.src = '';
            updatePlayPauseButton(false);
        } else {
            playTrack(currentTrackIndex);
        }
    }

    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            updatePlayPauseButton(true);
        } else {
            audioPlayer.pause();
            updatePlayPauseButton(false);
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentTrackIndex > 0) {
            playTrack(currentTrackIndex - 1);
        } else {
            playTrack(audioFiles.length - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentTrackIndex < audioFiles.length - 1) {
            playTrack(currentTrackIndex + 1);
        } else {
            playTrack(0);
        }
    });

    audioPlayer.addEventListener('ended', () => {
        if (currentTrackIndex < audioFiles.length - 1) {
            playTrack(currentTrackIndex + 1);
        } else {
            playTrack(0);
        }
    });

    function updatePlayPauseButton(isPlaying) {
        if (isPlaying) {
            playPauseButton.classList.remove('play');
            playPauseButton.classList.add('pause');
            playPauseButton.style.backgroundImage = "url('rMusicPause.png')";
        } else {
            playPauseButton.classList.remove('pause');
            playPauseButton.classList.add('play');
            playPauseButton.style.backgroundImage = "url('rMusicPlay.png')";
        }
    }
});
