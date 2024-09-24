// Function to post username(playername) and points to database.
export const SaveResult = async (name, score) => {
     try {
         const response = await fetch("http://localhost:2000/api/users", {
           method: "POST",
             headers: {
                "Content-Type": "application/json",
             },
            body: JSON.stringify({ playername: name, points: score }),
      });

         if (!response.ok) {
            throw new Error("Något gick fel vid sparande av användare.");
       }

         const data = await response.json();
         console.log("Användare sparad:", data);
     } catch (error) {
         console.error("Fel vid sparande av användare:", error);
     }
 };
