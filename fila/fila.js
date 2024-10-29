class FilaBanco {
    constructor() {
        this.filaPreferencial = [];
        this.filaNormal = [];
        this.ultimoChamado = null;
    }

    adicionarUsuario(tipo) {
        if (tipo === 'preferencial') {
            this.filaPreferencial.push(`Preferencial ${this.filaPreferencial.length + 1}`);
        } else {
            this.filaNormal.push(`Normal ${this.filaNormal.length + 1}`);
        }
    }

    chamarUsuario() {
        let usuarioChamado;

        do {
            if (this.ultimoChamado === 'preferencial') {
                if (this.filaNormal.length > 0) {
                    usuarioChamado = this.filaNormal.shift();
                    this.ultimoChamado = 'normal';
                } else if (this.filaPreferencial.length > 0) {
                    usuarioChamado = this.filaPreferencial.shift();
                    this.ultimoChamado = 'preferencial';
                } else {
                    usuarioChamado = null;
                }
            } else {
                if (this.filaPreferencial.length > 0) {
                    usuarioChamado = this.filaPreferencial.shift();
                    this.ultimoChamado = 'preferencial';
                } else if (this.filaNormal.length > 0) {
                    usuarioChamado = this.filaNormal.shift();
                    this.ultimoChamado = 'normal';
                } else {
                    usuarioChamado = null;
                }
            }
        } while (usuarioChamado === null && (this.filaPreferencial.length > 0 || this.filaNormal.length > 0));

        return usuarioChamado ? `${usuarioChamado} chamado para atendimento.` : 'Não há usuários na fila.';
    }
}

const banco = new FilaBanco();
banco.adicionarUsuario('preferencial');
banco.adicionarUsuario('normal');
banco.adicionarUsuario('normal');
banco.adicionarUsuario('preferencial');
banco.adicionarUsuario('preferencial');

console.log(banco.chamarUsuario()); 
console.log(banco.chamarUsuario()); 
console.log(banco.chamarUsuario()); 
console.log(banco.chamarUsuario()); 
console.log(banco.chamarUsuario()); 
console.log(banco.chamarUsuario()); 
console.log(banco.chamarUsuario()); 