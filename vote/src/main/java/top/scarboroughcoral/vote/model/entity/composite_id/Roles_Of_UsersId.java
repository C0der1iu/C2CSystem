package top.scarboroughcoral.vote.model.entity.composite_id;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

public class Roles_Of_UsersId implements Serializable {
    private Integer role_id;
    private Integer user_id;
}
