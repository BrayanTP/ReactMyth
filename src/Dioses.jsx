import React from "react";

const dioses = [
    {
        "id" : 1,
        "nombre": "Odin",
        "historia" : "Además es el dios de la guerra, apareciendo a través de muchos mitos nórdicos como quien traía las victorias. En las sagas nórdicas, Odín a veces actúa como un instigador de conflictos bélicos, y se decía que era capaz de comenzarlos con tan solo arrojar su lanza, Gungnir.",
        "img": "https://www.historiando.org/wp-content/uploads/2019/02/Odin.jpg"
    },
    {
        "id" : 2,
        "nombre": "Freyja",
        "historia" : "los orígenes de la diosa nórdica del amor están íntimamente relacionados con el combate. Se narra que los vanir y los æsir se enfrentaron en una gran guerra. El origen de la contienda eran los malos tratos que Gullveig estaba padeciendo a manos de estos últimos. El tratado de paz que puso fin al enfrentamiento incluía un intercambio de rehenes: se acordó el traslado del dios Njörðr desde el Vanaheim, hogar de los vanir, a Asgard, hogar de los æsir. Allí fue donde Njord, casado con su hermana Nerthus, engendró a dos bellos y no menos poderosos hijos: Frey y Freya.",
        "img": "https://www.worldhistory.org/img/r/p/500x600/8091.jpg?v=1623490202"
    },
    {
        "id" : 3,
        "nombre": "Thor",
        "historia" : "Thor era uno de los dioses nórdicos más conocidos. Era el más fuerte de los dioses, protegía a la juventud, al rayo, al fuego y a la arquitectura. Era hijo del dios Odín y Jörd. Se casó con la diosa Sif, con quien tuvo tres hijos, Magni, Modi y Trud y siempre se le representa con un martillo en la mano, su arma",
        "img": "https://redhistoria.com/wp-content/uploads/2012/05/thor.jpg"
    },
    {
        "id" : 4,
        "nombre": "Tyr",
        "historia" : "Tyr (en nórdico antiguo: Týr) es el dios de la guerra y el orden en la mitología nórdica, descrito como el 'Æsir de una mano'. Según la Edda mayor es hijo del gigante Hymir y de Hrodr. En su Edda menor Snorri Sturluson lo describe como hijo de Odín y de Frigg.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/1/18/Tyr_and_Fenrir-John_Bauer.jpg"
    },
    {
        "id" : 5,
        "nombre": "Heimdall",
        "historia" : "Heimdall es el dios guardián del Bifrost (puente entre el Valhalla y Midgard) en la mitología nórdica. Según la mitología, con un cuerno llamado Gjallarhorn, que le regaló Odín, anunciará el combate entre dioses y gigantes, después del cual sobrevendrá el fin del mundo, el Ragnarök.",
        "img": "https://www.quien.net/wp-content/uploads/mitologia-quien-fue/Heimdall.jpg"
    },
    {
        "id" : 6,
        "nombre": "Loki",
        "historia" : "Loki es un dios perteneciente a la mitología nórdica. Es hijo de los gigantes Farbauti y Laufey y tiene dos hermanos, Helblindi y Býleistr de los que poco se sabe. ... En la actualidad muchos grupos neopaganos que se autodenominan Lokeanos le rinden culto, lo que lo eleva a la categoría de dios menor",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Processed_SAM_loki.jpg/230px-Processed_SAM_loki.jpg"
    }
  ]

    const Gods = ({name, history, img }) => (
        <>
        <div class="card-group">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p class="card-text">{name}</p>
                    <p class="card-text">{history}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        </>
    );

  const Dioses = () => (
    <>
      {
        dioses.map( c => <Gods name={c.nombre} history={c.historia} img={c.img}/> )
      }
    </>
  )

export default Dioses;