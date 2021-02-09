System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, diasDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update("Só pode fazer negociação em dias úteis.");
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso!");
                }
                _ehDiaUtil(data) {
                    return data.getDay() != diasDaSemana.Domingo && data.getDay() != diasDaSemana.Sabado;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (diasDaSemana) {
                diasDaSemana[diasDaSemana["Domingo"] = 0] = "Domingo";
                diasDaSemana[diasDaSemana["Segundo"] = 1] = "Segundo";
                diasDaSemana[diasDaSemana["Terca"] = 2] = "Terca";
                diasDaSemana[diasDaSemana["Quarta"] = 3] = "Quarta";
                diasDaSemana[diasDaSemana["Quinta"] = 4] = "Quinta";
                diasDaSemana[diasDaSemana["Sexta"] = 5] = "Sexta";
                diasDaSemana[diasDaSemana["Sabado"] = 6] = "Sabado";
            })(diasDaSemana || (diasDaSemana = {}));
        }
    };
});
