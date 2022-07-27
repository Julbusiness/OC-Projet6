// class FilterV2 {

//   static async filterByPopularity(likes, Medias) {
//       await new Promise(resolve => setTimeout(resolve, 200))


//       if (!likes) {
//         return Medias;
//       }
  
//       const FilteredMedias = [];
      
      
//       for (let i = 0; i < Medias.length; i++) {
//         if (Medias[i].likes) {
//           FilteredMedias.push(Medias[i]);
//         }
//       }
      
//       FilteredMedias.sort((a, b) => {
//         return b.likes - a.likes
//       })
  
//       return FilteredMedias;
//     }

// }