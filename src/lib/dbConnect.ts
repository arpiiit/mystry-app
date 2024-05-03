import mongoose from "mongoose";


type connectionObject={
    isConneted? : number
}

const connection: connectionObject={}

async function dbConnect(): Promise<void>{
    if(connection.isConneted){
        console.log("Already connected to database");
        return
    }

    try {
       const db= await mongoose.connect(process.env.MONGODB_URI || '',{})
       connection.isConneted=db.connections[0].readyState

       console.log("DB connected successfully");
       
    } catch (error) {
        console.log("Databese connectiom failed", error);
    
        process.exit(1)
    }
}


export default dbConnect