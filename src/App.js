import './App.css'
import { Dialog } from './lib'
import webDesign from './web-design.png'

function App() {
  const myModal = {
    title: 'error',
    icon: webDesign,
    altText: 'web design image',
    content:
      'This is an example of a customized modal. To close it you can use the closing icon, the call-to-action button or simply press "Escape" on your Keyboard ',
    cta: "Wow, that's dope !",
  }

  const handleExample = () => {
    console.log('handleExample has been called')
  }

  return (
    <div className="App">
      <Dialog
        modal={myModal}
        callToAction={true}
        closeIcon={true}
        allowCustomization={true}
        callToActionCallback={handleExample}
      />
      <div>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima,
        inventore modi beatae doloremque dolores dolorum placeat, eligendi illo
        ipsa necessitatibus dignissimos earum, aspernatur voluptate repellat
        error quos incidunt cupiditate. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Non, aut dolores quidem sit veniam impedit pariatur
        veritatis? Amet non repudiandae quo dolor placeat esse molestias,
        exercitationem unde animi vel quibusdam? Quod minima expedita nisi harum
        laboriosam magnam voluptates beatae ab consequuntur et officia, quaerat
        modi nemo nulla officiis omnis error! Doloribus totam earum esse iditate
        quo excepturi, consequuntur quidem labore? Repellat molestiae impedit
        velit error reprehenderit perferendis minima! Ab beatae nostrum vel
        perspiciatis porro cupiditate eligendi architecto quis vitae,
        necessitatibus facilis earum aliquid deleniti soluta autem fuga tempore.
        Fuga eos enim magni necessitatibus, dolores minus repudiandae eligendi,
        vel quo nisi cum consectetur placeat veritatis labore laboriosam harum?
        Error iure cupiditate consequatur! Aliquam itaque fuga, commodi libero
        doloribus iste odit corrupti officia distinctio assumenda alias vel eius
        quisquam, corporis laborum exercitationem et. Cum, iste voluptate
        exercitationem culpa impedit laborum explicabo delectus accusantium
        harum magni eaque eius odio doloremque! Impedit, ipsum nobis in
        temporibus mollitia cumque odit, voluptas veritatis perferendis omnis
        quasi fuga iure, error iste consectetur aliquid soluta est nesciunt
        porro ipsa at molestiae inventore id delectus. Inventore, officia
        distinctio, sapiente ipsam provident ea eius laudantium quibusdam iste
        vel aliquid voluptas voluptatem, tempora dicta obcaecati debitis
        incidunt magnam voluptates et nobis expedita labore fuga?
        Exercitationem, quo eaque. Accusamus ab tempore quisquam fugit, dicta
        quia debitis. Numquam ipsa quam illo rerum quaerat consectetur impedit
        consequatur nihil saepe, autem corporis expedita cum excepturi eius
        reprehenderit adipisci officia laudantium! Itaque cupiditate, culpa
        atque nam et, officiis odit perferendis quam reprehenderit explicabo ut.
        Tempore adipisci numquam sunt. Numquam vero, distinctio tempore iure
        dolore, temporibus esse maxime nisi dicta quia odit! Cumque nobis
        eligendi dolor corrupti aperiam repellat facilis quae provident dolores.
        Nesciunt, repudiandae possimus ipsum beatae deserunt vel nam, laborum
        eaque illo doloremque amet omnis temporibus obcaecati harum! Maxime quo
        quis a quidem qui libero numquam nemo amet voluptas, accusamus delectus
        aperiam dolorem fugiat cupiditate? Dicta rem eius ea aperiam sint quos
        reiciendis nisi amet voluptate asperiores nulla commodi iusto deleniti
        temporibus blanditiis quibusdam eveniet officia omnis, vitae labore,
        cumque sapiente inventore doloremque. Est sit illo, temporibus
        exercitationem pariatur recusandae placeat totam quia similique sequi at
        libero debitis neque ipsum porro ut fugiat nam accusamus veniam nulla
        delectus. Totam, accusantium molestias nostrum atque laborum molestiae
        enim sed reprehenderit quos, laboriosam libero necessitatibus
        asperiores. Voluptatibus dignissimos delectus, reprehenderit beatae
        cupiditate dicta qui inventore neque iusto ex ullam sint ad quasi,
        ratione necessitatibus id ab at officiis iure animi asperiores vitae
        commodi esse! Cum sit labore facilis autem mollitia, molestiae
        doloremque aspernatur temporibus harum possimus facere vero aliquam,
        accusantium nihil. Ab excepturi aspernatur, architecto repellat
        doloremque odio distinctio magni non dolores asperiores quis cum hic
        inventore dignissimos officiis impedit incidunt, dolore ex repellendus?
        Nulla velit ipsum, consequuntur porro ullam sunt. Nemo soluta culpa
        voluptatibus fugiat totam corporis libero consequatur laborum porro in
        eius nostrum cumque quaerat illo deleniti eaque, ea quibusdam doloremque
        sequi sit. Aspernatur at autem architecto, vitae voluptatibus fuga,
        perspiciatis nobis in ab perferendis sunt dolores quibusdam sed alias
        eligendi fugiat eos voluptate aut est. Error quibusdam ipsa aliquam
        dolor ducimus, aspernatur, minus laborum reiciendis suscipit voluptatem
        sint a sed nisi molestias deserunt, optio animi nostrum. Voluptatum
        placeat perspiciatis vitae magni quidem iusto, eligendi iure nisi porro,
        eveniet, minus magnam. Ratione officia, praesentium quibusdam alias sunt
        ducimus deserunt laudantium consequatur in enim voluptatibus impedit
        fugit explicabo facere. Dicta corporis, veritatis praesentium
        consequuntur expedita corrupti, deleniti rerum dolores, dolor animi
        molestias optio dolorem officia laborum unde non fugit quis hic atque
        omnis vel esse beatae eos. Sit aperiam quos accusantium, ratione dolores
        autem magni earum vero, voluptatum itaque in aliquam, optio quisquam
        sed. Molestias, aliquid eos. Quis dicta ipsam suscipit facilis dolorem
        asperiores adipisci? Nisi earum fugiat dolor, autem, vero iusto ab nihil
        quo repellat dolorum minus. Vel ratione perferendis beatae hic, ducimus
        laboriosam minima tempora animi qui impedit, cupiditate quo quis nihil
        quia magnam saepe minus temporibus officiis facilis vitae illum veniam
        debitis laudantium accusantium. Architecto eaque ea non ut sunt
        excepturi tempore tempora labore ad reprehenderit nisi eum est
        cupiditate fuga deleniti, laboriosam perferendis voluptatum inventore
        dicta natus doloribus rerum, quas dolorem officiis? Quos, delectus.
        Voluptate dolorum nisi sed ad error aliquid quam, voluptates fugiat.
        Esse cupiditate quis tenetur praesentium qui delectus harum natus
        doloribus. Ipsa, qui minus cupiditate atque dignissimos esse molestias
        dolorum officia possimus aut id ipsum, aliquam sapiente accusantium sunt
        in maiores consequuntur impedit! Id libero sed aspernatur nisi sunt!
        Molestias impedit quia aspernatur molestiae ipsam et voluptas saepe
        repudiandae incidunt sit, possimus autem ut totam alias delectus esse,
        animi obcaecati dolorum laboriosam assumenda deleniti ea. Vitae minus,
        nihil quam, similique, ullam sequi incidunt cum labore numquam sint eos
        dolor neque! Quasi hic, illum sapiente ipsa obcaecati odio magni
        assumenda iste ullam dolorem, ex consectetur dolores nesciunt eaque quia
        molestias culpa fugit nobis velit explicabo, excepturi mollitia veniam?
        Ipsa minima in est blanditiis sapiente unde fuga molestias, suscipit
        adipisci placeat aut ullam natus consectetur perferendis non quidem,
        maxime voluptatibus voluptate aspernatur optio. Voluptatum a itaque
        reprehenderit adipisci, fuga harum praesentium voluptatem animi.
        Aspernatur quaerat ea reprehenderit et, eius inventore temporibus?
        Accusantium accusamus aliquid nemo minus inventore, officia iure dolorem
        molestias ipsam at! Dolor distinctio minus rerum eveniet ipsam qui vel?
        Blanditiis est aliquam nostrum. Minus delectus magni itaque quidem ut
        enim exercitationem, animi culpa non asperiores, dolorum eius pariatur
        neque ea commodi fugiat deleniti beatae libero aspernatur voluptatem
        minima dicta hic? Praesentium, molestias animi fuga enim molestiae
        recusandae rem deleniti aliquid repellat dolorem explicabo iusto
        sapiente? Mollitia est aspernatur id laudantium voluptas eligendi, sequi
        illo? Sequi similique debitis deleniti possimus consequuntur earum
        pariatur ex nostrum maiores accusamus mollitia vitae tempora excepturi
        distinctio dolore nesciunt saepe, molestias totam? Optio ea dolor,
        laborum, repellendus ipsa repellat obcaecati omnis veritatis nobis
        voluptatibus dicta tempore? Libero inventore, soluta enim architecto
        delectus est. Consequatur rerum vel pariatur, asperiores vero nemo
        reprehenderit sunt tempora consectetur qui molestias. Similique
        explicabo praesentium eveniet distinctio. Ipsam cumque soluta quia enim
        aperiam? Libero temporibus nam doloribus molestiae, mollitia magnam
        veniam? Maiores aperiam laborum veniam consectetur nisi dolore molestiae
        quae, autem optio similique iste consequatur harum quis debitis, nobis
        hic, illum repudiandae eaque fugit! Voluptate eius ab aut enim alias
        similique sequi quisquam officiis asperiores rerum vitae, blanditiis
        dicta inventore cum molestiae at eveniet nesciunt commodi dolore
        corrupti corporis voluptatibus error ex distinctio. Sit, quas? Culpa
        cum, excepturi a dignissimos impedit voluptates quia optio quas
        repudiandae explicabo laboriosam accusantium eos quis expedita autem.
        Iure ducimus aut magnam, inventore sint distinctio quis itaque vero modi
        molestias architecto voluptates debitis doloremque quibusdam
        reprehenderit libero optio dignissimos exercitationem ad necessitatibus
        dolorum error. Nesciunt omnis molestias praesentium amet repellat quasi!
        Adipisci aliquid, enim cum laboriosam eius excepturi ipsum, modi ad
        autem numquam quasi nulla error provident fugit? Repudiandae, inventore!
        Beatae, asperiores, enim eos maxime error repellat eveniet minima
        voluptatibus, necessitatibus at ex illum? Possimus ullam pariatur nam
        velit? Quasi amet deleniti aliquid culpa nam accusantium repudiandae
        perspiciatis sequi molestiae quia cupiditate velit corrupti laudantium
        aliquam, tempore vitae. Illum minima sed alias ipsam neque ea, libero
        iure consequuntur recusandae nisi corrupti molestiae eaque deleniti
        accusantium quis ratione fugit blanditiis incidunt voluptatum minus
        atque dolorem nam ex exercitationem. Alias beatae esse cum, dolorem,
        doloremque nobis ex facilis voluptas praesentium eius quo in placeat
        minima odio ducimus accusamus illo voluptatibus adipisci veniam atque
        porro quos unde sunt! Temporibus unde, corporis ullam blanditiis nihil
        reiciendis rerum tempora dicta possimus asperiores veniam eveniet maxime
        perspiciatis ipsa. Reprehenderit tenetur nobis asperiores id nam tempore
        recusandae debitis aut quaerat quis minus nemo perferendis repellendus,
        reiciendis minima eum assumenda impedit eos et culpa dolorem! Eos libero
        laborum vero nam doloribus facere hic delectus? Sequi consectetur
        tempore voluptas quasi pariatur reprehenderit excepturi amet,
        necessitatibus officiis quos omnis rem impedit consequuntur, veritatis,
        quisquam voluptate voluptatum libero quo delectus possimus ea odio ad?
        Consequuntur libero necessitatibus quisquam earum voluptatum commodi
        ullam aliquam labore cumque distinctio. Unde nulla aut quisquam sint,
        asperiores porro perferendis dignissimos quo doloremque saepe laborum
        exercitationem. Id tempore quasi ipsam, distinctio, cumque numquam
        obcaecati, labore sequi fuga nostrum sunt! Explicabo est molestias sed
        rem magnam similique necessitatibus pariatur vel suscipit dicta totam
        perspiciatis beatae ipsa voluptatem quisquam expedita, nostrum at itaque
        ex, delectus, asperiores consequuntur. Tenetur porro doloremque
        dignissimos quis corporis provident facere consequuntur? Voluptas hic,
        facere, error reiciendis beatae quas maiores dolores eius, nemo ea amet
        atque libero maxime vero veritatis corporis fugiat? Maxime earum
        inventore ab sapiente voluptatibus, quo atque, saepe praesentium laborum
        odio quod aliquid ad repellendus nobis amet ipsa repudiandae sit?
        Reprehenderit nemo fuga, maxime, porro eaque eligendi corrupti
        perferendis pariatur esse recusandae dolore repellat, consequuntur iste.
        Ex sit, error aperiam quae incidunt voluptates esse, perspiciatis nam,
        velit vitae libero? Voluptatum, dolorem. Id ullam natus voluptatum
        incidunt? Illum dicta facilis at illo, odit nemo deserunt mollitia qui,
        cupiditate in dolore possimus. Maiores dignissimos sapiente rerum libero
        consectetur est totam cumque quis? Maiores quod enim deleniti
        perspiciatis neque aliquid voluptas a laboriosam cupiditate alias vero
        pariatur, sapiente adipisci at praesentium dolores et accusantium harum
        distinctio. Aperiam delectus nam ipsum, repellendus, dolorem tempore
        doloribus sint est, at pariatur fuga quisquam voluptatibus laboriosam
        natus inventore perferendis. Necessitatibus iste perferendis pariatur
        facere quisquam. Blanditiis placeat deserunt illum esse sequi similique
        accusantium? Dignissimos, obcaecati atque. Distinctio, recusandae? Dicta
        dolores sint maiores, corporis sapiente dolor totam ut facilis delectus
        doloremque exercitationem iusto cupiditate obcaecati cumque illo nam
        magnam, et, molestias molestiae fugit autem fugiat incidunt. Tenetur
        eveniet consequatur vel non dolorem ea at asperiores. Laudantium
        molestias laborum dolor corporis incidunt repudiandae, ipsum temporibus
        obcaecati quia, eum fugit! Maxime officiis aspernatur eum impedit
        quaerat vitae ullam totam veritatis ab magni unde, magnam deleniti culpa
        eaque et perferendis incidunt voluptates nemo ipsa distinctio velit
        cupiditate quasi! Unde sequi, molestias alias maiores facere numquam
        quaerat ea illo labore eveniet, cupiditate accusamus qui ut. Provident
        laudantium ab excepturi veniam nam similique sed, facilis, ipsum nobis a
        suscipit sapiente doloribus fugit. Sit, tempora enim veritatis qui
        molestiae voluptatum ea quam debitis!
      </div>
    </div>
  )
}

export default App
