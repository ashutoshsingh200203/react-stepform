import { IFormInput } from "./interface";


let db:IDBDatabase; 

export enum Stores{
    Users="users"
} 

export const initDB=():Promise<IDBDatabase>=>{
    return new Promise((resolve,reject)=>{
        const request=indexedDB.open("myDB",1);
        request.onupgradeneeded=()=>{
            db=request.result;
            if(!db.objectStoreNames.contains(Stores.Users)){
                db.createObjectStore(Stores.Users,{
                    keyPath:"id",
                    autoIncrement:true,
                })
            }
        }
        request.onsuccess=()=>{
            db=request.result;
            resolve(db)
        }
        request.onerror=()=>{
            reject(request.error)
        }
    })
}

export const addUser=(user:Omit<IFormInput,"id">):Promise<void>=>{
    return new Promise((resolve,reject)=>{
        const transaction=db.transaction(Stores.Users,"readwrite");
        const store=transaction.objectStore(Stores.Users)
        const request=store.add(user);
        request.onsuccess=()=>{
            console.log(`User added with id ${request.result}`);
            resolve()
            
        }
        request.onerror=()=>{
            reject(request.error)
        }
    })
}

export const getUser = (id : number) : Promise<IDBDatabase> =>{
     return new Promise((resolve,reject)=>{
        const request = db.transaction(Stores.Users).objectStore(Stores.Users).get(id)
        request.onsuccess=()=>{
            console.log(`User get with the ID ${request.result.id}`);
            const updated = request.result ;
            resolve(updated)
        }
        request.onerror=()=>{
            reject(request.error)
        }
     })
}


export const getAllUser = (id : number) : Promise<IDBDatabase[]> =>{
    return new Promise((resolve,reject)=>{
       const request = db.transaction(Stores.Users).objectStore(Stores.Users).getAll() ;
       request.onsuccess=()=>{
           console.log(`User get with the ID ${request.result}`);
           const updated = request.result ;
           resolve(updated)
       }
       request.onerror=()=>{
           reject(request.error)
       }
    })
}

// export const updateUser = (id :number) : Promise<void> =>{
//     return new Promise ((resolve,reject)=>{
//         const request = db.transaction(Stores.Users).objectStore(Stores.Users)
        
        
//     })
// }