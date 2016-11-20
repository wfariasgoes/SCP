package br.wfghc.model.facade.rs;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.wfghc.model.domain.Fornecedor;

@Path("/fornecedor")
@Consumes(MediaType.APPLICATION_JSON)
@Produces({MediaType.APPLICATION_JSON,MediaType.APPLICATION_XML})
public class FornecedorFacade {

	static List<Fornecedor> fornecedores = new ArrayList<Fornecedor>();

	static {
		fornecedores.add(new Fornecedor(1, "Sadia"));
	}

	@GET
	public List<Fornecedor> getProduto() {
		return fornecedores;
	}

	@POST
	public Fornecedor salvar(Fornecedor fornecedor) {
		fornecedores.add(fornecedor);
		fornecedor.setCodigo(777);
		return fornecedor;
	}

	@PUT
	public void atualizar(Fornecedor fornecedor) {
		fornecedores.remove(fornecedor);
		fornecedores.add(fornecedor);

	}

	@DELETE
	@Path("/{codigoFornecedor}")
	public void excluir(@PathParam("codigoFornecedor") Integer codigoFornecedor) {
		Fornecedor fornecedor = new Fornecedor();
		fornecedor.setCodigo(codigoFornecedor);
		fornecedores.remove(codigoFornecedor);
	}

}
