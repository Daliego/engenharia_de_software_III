import fs from 'fs';
import { Post } from './post';

export class PostRepository {

    public static saveToFile(post: Post, path: string): void {
        try {
            const content = `ID: ${post.Id}\nTexto: ${post.Texto}\nAutor: ${post.Autor.Nome}\nData: ${post.Data}\nQuantidade de Likes: ${post.QuantidadeDeLikes}\n`;

            fs.writeFileSync(path, content);
        } catch (error) {
            console.error(error);
        }
    }

    public static readFile(path: string): void {
        const file: string = fs.readFileSync(path, { encoding: 'utf8'})


        console.log(file)
    }
}