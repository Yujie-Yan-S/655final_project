# 655final_project_front end



## Geni node setup
```
<rspec xmlns="http://www.geni.net/resources/rspec/3" xmlns:emulab="http://www.protogeni.net/resources/rspec/ext/emulab/1" xmlns:tour="http://www.protogeni.net/resources/rspec/ext/apt-tour/1" xmlns:jacks="http://www.protogeni.net/resources/rspec/ext/jacks/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.geni.net/resources/rspec/3    http://www.geni.net/resources/rspec/3/request.xsd" type="request">
  <node xmlns:emulab="http://www.protogeni.net/resources/rspec/ext/emulab/1" client_id="backend" component_id="urn:publicid:IDN+instageni.research.umich.edu+node+pc1" component_manager_id="urn:publicid:IDN+instageni.research.umich.edu+authority+cm" exclusive="false" sliver_id="urn:publicid:IDN+instageni.research.umich.edu+sliver+89490">
    <icon xmlns="http://www.protogeni.net/resources/rspec/ext/jacks/1" url="https://portal.geni.net/images/VM-noTxt-centered.svg"/>
    <routable_control_ip xmlns="http://www.protogeni.net/resources/rspec/ext/emulab/1"/>
    <sliver_type name="default-vm"/>
    <services>
      <login authentication="ssh-keys" hostname="pcvm1-9.instageni.research.umich.edu" port="22" username="lei"/>
      <login authentication="ssh-keys" hostname="pcvm1-9.instageni.research.umich.edu" port="22" username="ctony"/>
      <login authentication="ssh-keys" hostname="pcvm1-9.instageni.research.umich.edu" port="22" username="cdyyj"/>
      <login authentication="ssh-keys" hostname="pcvm1-9.instageni.research.umich.edu" port="22" username="matta"/>
      <emulab:console server="pcvm1-9.instageni.research.umich.edu"/>
      <emulab:imageable available="true"/>
    </services>
    <emulab:vnode disk_image="emulab-ops/UBUNTU18-64-STD:0" hardware_type="pcvm" name="pcvm1-9"/>
    <host ipv4="192.41.233.53" name="backend.FrontEnd655.ch-geni-net.instageni.research.umich.edu"/>
  </node>
  <rs:site_info xmlns:rs="http://www.protogeni.net/resources/rspec/ext/site-info/1">
    <rs:location country="" latitude="42.29062" longitude="-83.71365"/>
  </rs:site_info>
</rspec>

```

## Configuration on linux mahcine
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install lts/fermium
npm install -g @vue/cli
git clone https://github.com/Yujie-Yan-S/655final_project.git
exec $SHELL

```

## Running the front end
```
 cd .\655final_project\src\components\
 Edit the Search.vue IP address for web socket to the IP of the public routable IP of load balance server.
 cd ../../
 Edit the vue.config.js Host IP to the public routable IP for the server.
 npm install
 npm run serve
 ```
