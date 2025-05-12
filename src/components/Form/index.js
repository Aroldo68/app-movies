import { useState } from "react";
import { categories } from "../Category";
import styles from "./Form.module.css";


function Form() {

    const [ url, setURL ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ videos, setVideos ] = useState([])
    const [ errors, setErrors ] = useState('')

    function valideURL(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if(!regex.test(url) || url.length < 43) {
            setErrors('ERRO: URL inválida!')
            return false
        } else {
            return url.substring(32, 43)    // id do video
        }
    }

    function onSave(e) {
        e.preventDefault()
        console.log(url, category)

        // Validar Categoria
        if(!category || category === '-') {
           setErrors('ERRO: Escolha uma categoria!')
            return
        } else {
            setErrors('')
        }

        // Validar URL
        const urlVideo = valideURL(url)
        if(urlVideo && category) {
            // salvar os dados
            const newVideo = { url, category }
            setVideos([...videos, newVideo])
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
            // Limpar o formulario
            setURL('')
            setCategory('')
        } else {
            setErrors('ERRO: URL inválida!')
        }
                
    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de Video</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                        value={url}
                        onChange={e => setURL(e.target.value)}
                        minLength="43"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="-">Selecione uma categoria</option>
                        { categories.map(item => {
                            return <option value={item}>{item}</option>
                        }) }
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    { errors }
                </div>
            </form>
        </section>
    );
}
    
export default Form;