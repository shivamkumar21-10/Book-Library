class BookModel {
    id: number;
    title: string;
    author?: string;
    description?:string;
    copies?:number;
    copiesAvailable?: number;
    categories?: string;
    img?: string;

    constructor (id: number,title: string,author: string,description:string,copies:number,copiesAvailable: number,categories: string,img: string) {
        this.id =id
        this.title =title
        this.author =author
        this.description =description
        this.copies =copies
        this.copiesAvailable =copiesAvailable 
        this.categories =categories
        this.img =img 
    }
}

export default BookModel;