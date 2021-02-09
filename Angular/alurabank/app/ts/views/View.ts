export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean

    constructor(selector: string, espacar: boolean = false) {

        this._elemento = $(selector)
    }

    update(model: T) {

        let template = this.template(model)
        if (this._escapar) 
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        
        this._elemento.html(template)
    }

    abstract template(model: T): string;
}