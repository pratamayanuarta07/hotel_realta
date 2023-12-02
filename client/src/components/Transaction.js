// import React, { useEffect, useState } from "react";
// import Menu from "./Menu";
// import { getListTransaction, addTransaction, deleteTransaction, updateTransaction, getDetailTransaction } from "../actions/transactionAction";
// import { useDispatch, useSelector } from "react-redux";
// import Loading from "./Loading";

// const Bank = () => {
//   const { getListTransactionsResult, addTransactionsResult, deleteTransactionsResult, updateTransactionsResult, getDetailTransactionsResult } = useSelector((state) => state.TransactionsReducer);

//   const dispatch = useDispatch();

//   const [account, setAccount] = useState({
//     bank_code: "",
//     bank_name: "",
//   });

//   const [id, setId] = useState("");

//   const handleaddbank = (e) => {
//     e.preventDefault();
//     dispatch(addBank(account));
//     dispatch(getListBank());
//   };

//   const handleupdatebank = (e) => {
//     e.preventDefault();
//     dispatch(updateBank(+id, account));
//     dispatch(getListBank());
//   };

//   useEffect(() => {
//     dispatch(getListBank());
//   }, [dispatch]);

//   useEffect(() => {
//     if (addBanksResult) {
//       dispatch(getListBank());
//       setBank({
//         bank_code: "",
//         bank_name: "",
//       });
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (updateBanksResult) {
//       dispatch(getListBank());
//       setBank({
//         bank_code: "",
//         bank_name: "",
//       });
//       setId("");
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (deleteBanksResult) {
//       dispatch(getListBank());
//       setBank({
//         bank_code: "",
//         bank_name: "",
//       });
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (getDetailBanksResult) {
//       setBank({
//         bank_code: getDetailBanksResult.bank_code,
//         bank_name: getDetailBanksResult.bank_name,
//       });
//       setId(getDetailBanksResult.bank_entity_id);
//     }
//   }, [dispatch]);

//   const banks = [].concat(getListBanksResult);

//   return (
//     <div>
//       <div class="content text-center container">
//         <div class="row justify-content-start">
//           <div class="col-2 text-start"></div>
//           <div class="col-12 text-start">
//             <h4>Table Bank</h4>
//             <table class="table align-middle">
//               <thead>
//                 <tr>
//                   {/* <th scope="col">Bank Id</th> */}
//                   <th scope="col">Account Number</th>
//                   <th scope="col">Desc</th>
//                   <th scope="col">Saldo</th>
//                   <th scope="col">Type</th>
//                   <th scope="col" colSpan={2} className="col-1">
//                     <div class="d-grid">
//                       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                         {/* <IoMdAdd /> */}
//                         Add
//                       </button>
//                     </div>
//                     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                       <div class="modal-dialog modal-dialog-centered">
//                         <div class="modal-content">
//                           <div class="modal-header">
//                             <h1 class="modal-title fs-5" id="exampleModalLabel">
//                               Add Account
//                             </h1>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                           </div>
//                           <div class="modal-body row align-items-center">
//                             <div className="col-auto">
//                               <label>Bank Code</label>
//                             </div>
//                             <div className="col-auto">
//                               <input
//                                 className="form-control"
//                                 type="text"
//                                 placeholder="BCA"
//                                 onChange={(e) =>
//                                   setBank({
//                                     ...bank,
//                                     bank_code: e.target.value,
//                                   })
//                                 }
//                               />
//                             </div>
//                           </div>
//                           <div class="modal-body row align-items-center">
//                             <div className="col-auto">
//                               <label>Bank Name</label>
//                             </div>
//                             <div className="col-auto">
//                               <input
//                                 className="form-control"
//                                 type="text"
//                                 placeholder="BCA"
//                                 onChange={(e) =>
//                                   setBank({
//                                     ...bank,
//                                     bank_name: e.target.value,
//                                   })
//                                 }
//                               />
//                             </div>
//                           </div>
//                           <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
//                               Cancel
//                             </button>
//                             <button onClick={(e) => handleaddbank(e)} type="submit" class="btn btn-primary" data-bs-dismiss="modal">
//                               Add
//                             </button>
//                           </div>
//                           {/* </form> */}
//                         </div>
//                       </div>
//                     </div>
//                   </th>
//                 </tr>
//               </thead>
//               {banks.length > 0 ? (
//                 banks.map((entity, i) => {
//                   return (
//                     <tbody className="text-start">
//                       <tr>
//                         <td>{i + 1}</td>
//                         <td>{entity.bank_code}</td>
//                         <td>{entity.bank_name}</td>
//                         <td>
//                           <div class="d-grid">
//                             <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => dispatch(getDetailBank(entity.bank_entity_id))}>
//                               {/* <IoMdAdd /> */}
//                               Edit
//                             </button>
//                           </div>
//                           <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
//                             <div class="modal-dialog modal-dialog-centered">
//                               <div class="modal-content">
//                                 <div class="modal-header">
//                                   <h1 class="modal-title fs-5" id="editModalLabel">
//                                     Edit Bank
//                                   </h1>
//                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                 </div>
//                                 <div class="modal-body row align-items-center">
//                                   <div className="col-auto">
//                                     <label>Bank Code</label>
//                                   </div>
//                                   <div className="col-auto">
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       placeholder="BCA"
//                                       value={bank.bank_code}
//                                       onChange={(e) =>
//                                         setBank({
//                                           ...bank,
//                                           bank_code: e.target.value,
//                                         })
//                                       }
//                                     />
//                                   </div>
//                                 </div>
//                                 <div class="modal-body row align-items-center">
//                                   <div className="col-auto">
//                                     <label>Bank Name</label>
//                                   </div>
//                                   <div className="col-auto">
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       placeholder="BCA"
//                                       value={bank.bank_name}
//                                       onChange={(e) =>
//                                         setBank({
//                                           ...bank,
//                                           bank_name: e.target.value,
//                                         })
//                                       }
//                                     />
//                                   </div>
//                                 </div>
//                                 <div class="modal-footer">
//                                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
//                                     Cancel
//                                   </button>
//                                   <div class="dropdown ms-auto">
//                                     <i class="fas fa-ellipsis-vertical" data-bs-toggle="dropdown" aria-expanded="false"></i>
//                                     <ul class="dropdown-menu">
//                                       <li>
//                                         <span class="dropdown-item">
//                                           <i class="fas fa-pen mx-2"></i> Update
//                                         </span>
//                                       </li>
//                                       <li>
//                                         <span class="dropdown-item">
//                                           <i class="fas fa-trash mx-2"></i> Delete
//                                         </span>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                   {/* <button onClick={(e) => handleupdatebank(e)} type="submit" class="btn btn-primary" data-bs-dismiss="modal">
//                                     Edit
//                                   </button> */}
//                                 </div>
//                                 {/* </form> */}
//                               </div>
//                             </div>
//                           </div>
//                           <button className="btn btn-danger" onClick={() => dispatch(deleteBank(entity.bank_entity_id))}>
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     </tbody>
//                   );
//                 })
//               ) : (
//                 <Loading />
//               )}
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bank;
