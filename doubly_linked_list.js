class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /*inserta al final*/
    append(data) {
        if (!data) return "No hay dato";
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
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
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    /*inserta despues de un nodo*/
    insertAfterNode(nodeData, value) {
        let current = this.head;
        while (current) {
            if (current.data === nodeData) {
                const newNode = new Node(value);
                newNode.next = current.next;
                if (current.next) {
                    current.next.prev = newNode;
                } else {
                    this.tail = newNode;
                }
                current.next = newNode;
                newNode.prev = current;
                return;
            }
            current = current.next;
        }
        console.log("Nodo no encontrado");
    }

    /*recorre toda la lista*/
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    /*elimina nodo*/
    deleteNode(element) {
        if (!element || !this.head) {
            return "No hay parámetro o lista";
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
                if (current.next) {
                    current.next.prev = current;
                }
                return "Elemento borrado";
            }
            current = current.next;
        }
        return "Elemento no encontrado";
    }

    deleteHead() {
        if (!this.head) {
            return "No hay";
        }
        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        }
    }

    deleteTail() {
        if (!this.head) return "No hay lista";
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        let current = this.head;
        while (current.next) {
            if (current.next === this.tail) {
                this.tail = current;
                this.tail.next = null;
                return "La cola ha sido reasignada";
            }
            current = current.next;
        }
    }
}
