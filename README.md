## ImageMagick RCE CVE 2016-3714

This github repo contains poc material for CVE 2016-3714. This project is for experimentation & reference purposes only. This project is unsupported.

This project contains a dockerfile and simple AngularJS/NodeJS app to build a vulnerable web app container to see how the vulnerability can be exploited. 

To run, first you need to build the Docker image which will install Centos along with a vulnerable version of imagemagick:

``` docker build -t magick . ```

To start the container run the following command: ``` docker run -it -p 3000:3000 magick ```. This will take you to a shell. To start the web app run ``` node app.js ```. 

Access the web app at ```http://localhost:3000```

Try and upload the file ```touch.mvg```. An error is expected but afterwards quit out of node with ```Ctrl+C``` and check the ```/tmp/``` folder to see if the exploit has been successful.

Thats it, have fun!

