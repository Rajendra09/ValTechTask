package stepdefintion;

import com.google.common.base.Function;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;

import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Created by rsin23 on 10/9/2016.
 */
public class StepDef {
    private WebDriver driver;
    @When("^I navigate to \"([^\"]*)\"$")
    public void i_navigate_to(String webSiteName)  {
        try {
            driver = new FirefoxDriver();
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
            driver.get(webSiteName);
        } catch (Exception e)
        {
            e.printStackTrace();
        }
    }


    @Then("^I should see \"([^\"]*)\" section on home page$")
    public void i_should_see_section_on_home_page(String sectionNameArg)  {
        WebElement sectionName;
        sectionName = findElement(driver,By.xpath(".//*[@id='container']/div[2]/div[3]/div[1]/header/h2"));
        Assert.assertTrue(sectionName.isDisplayed());
        Assert.assertEquals(sectionNameArg,sectionName.getText());
    }


    @Then("^I close the browser$")
    public void i_close_the_browser() throws Throwable {
        driver.close();

    }

    @When("^I navigate to (.*) page$")
    public void i_navigate_to_page(String pageName) {
        findElement(driver,By.xpath(".//*[@data-icon='hamburger2']")).click();
        driver.findElement(By.linkText(pageName)).click();

    }

    @Then("^I should see (.*) heading on page$")
    public void i_should_see_heading_on_page(String expectedHeadingName)  {
        WebElement heading;
        heading=findElement(driver,By.xpath(".//h1"));
        Assert.assertTrue(heading.isDisplayed());
        Assert.assertEquals(expectedHeadingName,heading.getText());

    }

    @When("^I open to Contact page$")
    public void i_open_Contact_page()  {
        findElement(driver,By.xpath(".//*[@data-icon='earth-contact']")).click();
    }

    @Then("^I should see (\\d+) total Valtech office$")
    public void i_should_see_total_Valtech_office(int expectedLocationCount)  {
        List<WebElement> allLocations=driver.findElements(By.xpath(".//*[@data-icon='location']"));
         Assert.assertEquals(expectedLocationCount,allLocations.size());
    }



    // reusbale Wait function

    private WebElement findElement(final  WebDriver driver,final By locator)
    {
        Wait<WebDriver> wait=new FluentWait<WebDriver>(driver)
                .withTimeout(30,TimeUnit.SECONDS)
                .pollingEvery(5,TimeUnit.SECONDS)
                .ignoring(org.openqa.selenium.NoSuchElementException.class);
        WebElement waitElement=wait.until(
                new Function<WebDriver, WebElement>() {
                    public WebElement apply(WebDriver driver) {
                        return driver.findElement(locator);
                    }
                }
        );
        return waitElement;
    }
}

