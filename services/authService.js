// class authService {
//     async  getallData (authBody){
//         try{

//         }catch(err){
//             return { response_code: 'RL0002', status: 'error', data: '', description: err.message, };
//         }
//     }


//     async saveRole(roleBody) {
//         try {
//             const roleModel = new RoleModel().getModel();
//             let result = await roleModel.create(roleBody);
//             return result !== {} ? result : { response_code: 'RL0001', status: 'error', data: '', description: 'added role is failed.' };
//         } catch (err) {

//         }

//     }
// }