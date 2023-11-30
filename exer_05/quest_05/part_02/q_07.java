// 7. Cite um exemplo em que uma mudança em uma dependência, por exemplo, banco
// de dados, ou mecanismo de autenticação ou conexão via sockets poderia impactar
// uma implementação de outros módulos.

//Interface que define o contrato de um repositório
interface IRepository {
    public void add(Object o);
}

//Implementações de repositórios do JPA
class JPARepository implements IRepository {
    public void add(Object o) {
        // ...
    }
}

//Implementações de repositórios do Prisma
class PrismaRepository implements IRepository {
    public void add(Object o) {
        // ...
    }
}

//Dessa maneira o módulo AddService não precisa saber qual implementação de repositório que ele está usando
//e no caso de precisar mudar de implementação, basta mudar a dependência passada no controller quando 
//o addService for instanciado.

class AddService {
    private IRepository repository;

    public AddService(IRepository repository) {
        this.repository = repository;
    }

    public void add(Object o) {
        this.repository.add(o);
    }
}

class AddController {
    private AddService addService;

    public AddController() {
        this.addService = new AddService(new JPARepository() /* ou new PrismaRepository() */);
    }

    public void add(Object o) {
        this.addService.add(o);
    }
}
