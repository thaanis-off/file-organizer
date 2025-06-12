import fs from 'fs';
import path from 'path';

const fileExtension = {
    images: ".jpg",
    txt: ".txt",
    videos: ".mp4",
    documents: ".pdf",
    audios: ".mp3",
}

// for knowing the current directory
const currentDir = process.cwd();
const allFiles = fs.readdirSync(currentDir);
// console.log(`Current Directory: ${currentDir}`);


function createImgDir(){
    const makeImgDir = path.join(currentDir, 'images');

    if (!fs.existsSync(makeImgDir)) {
        fs.mkdirSync(makeImgDir);
        console.log('Images directory created successfully.');
    }

    for(let file of allFiles){
        if (typeof file == "string" && path.extname(file) === fileExtension.images) {
            const oldPath = path.join(currentDir, file);
            const newPath = path.join(makeImgDir, file);

            fs.renameSync(oldPath, newPath);
            
        }
    }
}

createImgDir();
































// const organizeFiles = (sourceDir, targetDir) => {
//     fs.readdir(sourceDir, (err, files) => {
//         if (err) throw err;

//         files.forEach(file => {
//             const ext = path.extname(file);
//             const category = Object.keys(fileExtension).find(key => fileExtension[key] === ext);

//             if (category) {
//                 const categoryDir = path.join(targetDir, category);
//                 fs.mkdirSync(categoryDir, { recursive: true });
//                 fs.renameSync(path.join(sourceDir, file), path.join(categoryDir, file));
//             }
//         });
//     });
// };

// const sourceDirectory = './source';
// const targetDirectory = './organized';

// organizeFiles(sourceDirectory, targetDirectory);