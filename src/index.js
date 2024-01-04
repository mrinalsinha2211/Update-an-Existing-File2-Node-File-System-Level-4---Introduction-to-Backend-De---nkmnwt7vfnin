const fs = require('fs').promises;
const fileName = 'myfile.txt';
const fileContent="Newton School";

const updateFile = async (fileName, fileContent) => {
    //Write your code here to overwrite the file content
    //Don't change function name
     try{
    const update=await fs.appendFile(fileName,fileContent);
    console.log(`${fileName} is updated`);
    return update
  }catch (error){
    console.log(`error in update${error.message}`);
    return null;
  }
};


module.exports = updateFile;
