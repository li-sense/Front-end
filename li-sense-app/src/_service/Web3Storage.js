import { Web3Storage } from 'web3.storage'
const client = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAwMkNmZDQwODk4MDIxYjM3NjEyM2JCQzM2ODFjZGY0ZjYzNGNCNmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTU3NDcwODg2MzUsIm5hbWUiOiJraW5lIn0.mYQr8qJyrk_BEKrcOiNoE2EEo_aDeP99Tkstu0KOWW0' })

const uploadNewFile = async (fileInput, name) => {
let link = ''
console.log('name', name)
    const rootCid = await client.put(fileInput, {
      name: 'lisense-image'
    }).then((res) =>{
      link = 'https://' + res+ '.ipfs.w3s.link/' + name
      return link
    })
    return rootCid;


}

export const _web3 = {
  uploadNewFile
};
