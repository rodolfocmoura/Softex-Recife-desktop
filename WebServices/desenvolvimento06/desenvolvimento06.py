from flask import Flask, request, jsonify

app = Flask(__name__)

# Simula um banco de dados em memória
alunos = [
    {"id": 1, "nome": "João", "idade": 20},
    {"id": 2, "nome": "Maria", "idade": 22},
    {"id": 3, "nome": "Pedro", "idade": 19},
]


# Rota para criar um novo aluno
@app.route('/alunos', methods=['POST'])
def criar_aluno():
    novo_aluno = request.json
    novo_aluno["id"] = len(alunos) + 1
    alunos.append(novo_aluno)
    return jsonify(novo_aluno), 201


# Rota para listar todos os alunos
@app.route('/alunos', methods=['GET'])
def listar_alunos():
    return jsonify(alunos), 200


# Rota para ler um aluno específico
@app.route('/alunos/<int:id>', methods=['GET'])
def ler_aluno(id):
    for aluno in alunos:
        if aluno["id"] == id:
            return jsonify(aluno), 200
    return "Aluno não encontrado", 404


# Rota para atualizar um aluno
@app.route('/alunos/<int:id>', methods=['PUT'])
def atualizar_aluno(id):
    for aluno in alunos:
        if aluno["id"] == id:
            novo_aluno = request.json
            novo_aluno["id"] = id
            alunos[alunos.index(aluno)] = novo_aluno
            return jsonify(novo_aluno), 200
    return "Aluno não encontrado", 404


# Rota para excluir um aluno
@app.route('/alunos/<int:id>', methods=['DELETE'])
def excluir_aluno(id):
    for aluno in alunos:
        if aluno["id"] == id:
            alunos.remove(aluno)
            return "", 204
    return "Aluno não encontrado", 404


if __name__ == '__main__':
    app.run()
