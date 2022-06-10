import React, { useState, useEffect } from "react";
import axios from "axios";

const myData = [
    {
        id: 1,
        nama: "Sapto",
        alamat: "Jogja",
    },
    {
        id: 2,
        nama: "Prasojo",
        alamat: "Semarang",
    },
]

function hashCode(str) {
    return str.split('').reduce((prevHash, currVal) =>
        (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
}

console.log("hashCode(\"Hello!\"): ", hashCode('Hello!'));


function Data() {
    const [nama, setNama] = useState(myData[0].nama)
    const [dataPost, setDataPost] = useState([])
    const GantiNama = () => {
        nama === "Sapto" ? setNama(myData[1].nama) : setNama(myData[0].nama)
    }
    const dataJson = () => axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(function (res) {
            console.log(res.data)
            setDataPost(res.data.slice(0, 10))
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    const handleRemove = (id) => {
        const newPost = dataPost.filter((item) => item.id !== id);
        setDataPost(newPost);
        // remove item
    }
    const handleRemoveKey = (e) => {
        const newPost = dataPost.filter(item => item.id !== e + 1);
        setDataPost(newPost);
        console.log(newPost)
    }

    useEffect(() => {
        dataJson()

    }, [])
    return (
        <div>
            <h1>Data Ku</h1>
            <ul>
                <li>1. Data Sudah dibuat pada variable myData</li>
                <li>2. Data Sudah ditampilkan pada label nama, Tekan button Ganti nama untuk mengganti nama</li>
            </ul>
            <div>Nama {nama}</div>
            <button onClick={GantiNama}>Ganti Nama</button>
            <hr />
            3. Buka Console log untuk melihat data JSON<br />
            <hr />
            4. Menampilkan data
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataPost.map((item, i) => {
                            return (
                                <tr key={item.id}>
                                    <td>{i + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td>            <button type="button" onClick={() => handleRemove(item.id)}>
                                        Remove
                                    </button>
                                    </td>
                                    <td>            <button type="button" onClick={() => handleRemoveKey(i)}>
                                        Remove Key 0
                                    </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <hr />
            5. Fungsi hapus Data, klik button remove, maka data akan terhapus<br />
            6. Menghapus salah satu key<br />
            7. Function Hashing di console log<br />
            8. Debug: File Terlampir<br />
            - Penulisan data kurang koma<br />
            - Penulisan data kurang tanda petik<br />
            - value pada valueAsString ada yg tidak di isi, harusnya null atau tanda petik kosong aja <br />
            - nama fungsi ada yg sama (compare(a,b)) walaupun tidak error tapi ini tidak baik karena bisa menimbulkan kurang optimanya code<br />
            - Pada compare compareDeep a.attribute menghasulkan undefined sehingga tidak bisa di split, begitu juga dengan b.attribute
            - pada saat convert data ke integer (parseInt(cleanA[] ini data nya kosong, sehingga error.)
            9. Silahkan ke menu login
        </div>
    )
}

export default Data
