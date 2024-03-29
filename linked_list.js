class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    /*inserta al final*/
    apend(data) {
        if (!data) return "No hay dato";
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    /*inserta al inicio*/
    prepend(data) {
        if (!data) return "No hay dato";
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    /*inserta despues de un nodo*/ insertAfterNode
    /*recorre toda la lista*/
    traverse(data) {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = this.next;
        }
    }

    /*elimina nodo*/
    deleteNode(element) {
        if (!element || !this.head) {
            return "No hay parametro o lista";
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return "El elemento indicado era la cabeza";
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === element) {
                if (current.next === this.tail) {
                    this.tail = current;
                    return "El elemento ingresado se ha borrado y era la cola";
                }
                current.next = current.next.next;
                return "Elemento borrado";
            }
            current = current.next;
        }
        return "Elemento no encontrado";
    }

    deleteHead()
    {
        if(!this.head){
            return "No hay"
        }
        this.head = this.head.next 

        if(this.head === null){
            this.tail = null
        }

    }

    deleteTail(){
        if(!this.head) return "No hay lista"
        if(this.head=== this.tail){
            this.head= null;
            this.tail = null;
        }
        let current = this.head;
        while(current.next){
            if(current.next === this.tail){
                this.tail = current
                return"La cola ha sido reasignada"
            }
            current = current.next
        }
    }
    insertAfterNode(node, value) {
        let current = this.head;
        const newNode = new Node(value);
        while (current) {
          if (current.data === value) {
            newNode.next = current.next;
            current.next = newNode;
            if (current = this.tail){
                this.tail = newNode
            }
            return
          }
          current = current.next
        }
      } 
    }
// this inicializa los valores de la clas