export default function aboutPage() {
	const container = document.getElementById('content');
    container.innerHTML = '';

    const heading = document.createElement('h1')
    heading.innerText = 'About Us'

    const bio = document.createElement('p')
    bio.classList.add('paragraph')
    bio.innerText = `Lorem ipsum odor amet, consectetuer adipiscing elit. Ad sagittis conubia risus placerat mus, aliquam vestibulum tristique lacinia. Eros hendrerit etiam maximus convallis tempus feugiat. Ipsum tristique fringilla penatibus efficitur maximus ligula primis. Ullamcorper accumsan eros libero quam egestas, nec sollicitudin commodo? Ut enim vitae ipsum iaculis nunc integer malesuada nostra justo. Commodo litora non lectus fermentum elit eu class fames.

    Conubia pretium placerat suscipit donec ac sapien. Libero consectetur sed congue eget arcu nostra ultricies. Viverra faucibus tincidunt diam primis dignissim? Mus pharetra urna at fusce maximus vel conubia. Viverra sem eu nibh iaculis; metus platea euismod. Donec id pellentesque feugiat sed quam pellentesque nisl pellentesque. Parturient eget donec himenaeos mus non id. Nunc fames nam augue nisl turpis, platea turpis. Nec aptent hac faucibus commodo felis. Litora at proin nisl leo ex leo non elementum convallis.

    Parturient nunc vitae nec massa pulvinar convallis integer orci. Nisi blandit auctor quisque nullam vel porta nibh tellus. Lacus scelerisque ridiculus taciti aptent pharetra rutrum. Hendrerit velit ullamcorper nulla orci arcu; ridiculus tristique? Tellus maecenas cubilia quam aliquam vivamus enim. Sem tincidunt cras nisi odio proin hendrerit imperdiet sollicitudin aptent. Vitae orci bibendum condimentum natoque natoque, proin metus.`;

    const contactInfo = document.createElement('p')
    contactInfo.classList.add('paragraph');
    contactInfo.innerHTML = `123 Anywhere St <br>
                             Anywhere, Intheworld 12345 <br>
                             tel: 999-999-9999 <br>
                             email: yo@wassup.com`

    container.appendChild(heading)
    container.appendChild(bio)
    container.appendChild(contactInfo)
    
    
}
